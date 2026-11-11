# 毛绒小队 · 板块小游戏合集 —— 板块一：客厅吃鸡（10 人：你 + 9 个 AI）（Godot 4.3+）
# 用法：
#   1. 把这个脚本和角色 GLB（tactical-jolly-rigged.glb，以及 fox-rigged.glb 等）放进项目根目录 res://
#   2. 新建场景，根节点 Node3D，挂上这个脚本，保存，按 F6
#   房间、家具、飞机、AI、界面全部自动生成，不用改 Input Map；缺哪个角色文件就用战术小熊顶上
# 操作：
#   WASD 走 · Shift 跑 · 空格 跳（在飞机上 = 跳伞）· 鼠标 转视角
#   左键 开火（空手 = 挥拳）· 右键 瞄准 · R 换弹 · Esc 放开鼠标
extends Node3D

# ======================= 可调参数 =======================
@export var char_scale := 0.3          # 角色身高（米）。房间是真人尺寸，所以小队员像玩具
@export var walk_speed := 0.7
@export var run_speed := 1.3
@export var jump_velocity := 2.2       # 大约能跳 25 厘米高
@export var mouse_sensitivity := 0.003
@export var bot_count := 9
@export var bot_spread := 0.07         # AI 枪法误差，越大越菜
@export var bot_reaction := 0.5        # AI 发现你到开枪的反应时间（秒）
@export var bot_sight := 4.0          # AI 能发现敌人的距离（米）
@export var plane_time := 16.0         # 飞机横穿房间的时间
@export_group("镜头")
@export var cam_distance := 0.7        # 平时镜头离角色多远（米），越小越近
@export var cam_side := 0.12           # 平时往右肩偏多少
@export var aim_distance := 0.45       # 右键瞄准时的距离
@export var aim_side := 0.16
@export var aim_fov := 45.0
@export_group("毛发")
@export var fur_length := 0.05
@export var fur_density := 200.0
@export var fur_shells_player := 24
@export var fur_shells_bot := 8

const ROSTER := [
	{"name": "战术小熊", "file": "res://tactical-jolly-rigged.glb", "fur": true},
	{"name": "小狐狸", "file": "res://fox-rigged.glb", "fur": true},
	{"name": "小熊猫", "file": "res://redpanda-rigged.glb", "fur": true},
	{"name": "小恐龙", "file": "res://dino-rigged.glb", "fur": true},
	{"name": "小青蛙", "file": "res://frog-rigged.glb", "fur": false},
	{"name": "宇航员", "file": "res://astronaut-rigged.glb", "fur": false},
	{"name": "小机器人", "file": "res://robot-rigged.glb", "fur": false},
	{"name": "果冻", "file": "res://jelly-rigged.glb", "fur": false},
	{"name": "小鸡", "file": "res://chick-rigged.glb", "fur": true},
	{"name": "小蘑菇", "file": "res://mushroom-rigged.glb", "fur": false},
]
const FALLBACK_FILE := "res://tactical-jolly-rigged.glb"

const WEAPONS := {
	"pistol": {"name": "软弹手枪", "dmg": 22.0, "rate": 0.32, "mag": 8, "spread": 0.012, "pellets": 1, "range": 6.0, "reload": 1.2, "rank": 1, "color": Color(1.0, 0.55, 0.1)},
	"smg": {"name": "连发软弹枪", "dmg": 8.0, "rate": 0.12, "mag": 24, "spread": 0.035, "pellets": 1, "range": 5.0, "reload": 1.6, "rank": 2, "color": Color(0.2, 0.6, 1.0)},
	"shotgun": {"name": "散弹软弹枪", "dmg": 9.0, "rate": 0.85, "mag": 4, "spread": 0.09, "pellets": 6, "range": 3.0, "reload": 2.0, "rank": 3, "color": Color(0.3, 0.9, 0.4)},
}
const ROOM_X := 5.0     # 房间 10 × 8 米，层高 2.7 米
const ROOM_Z := 4.0
const ROOM_H := 2.7
const PLANE_FILES := ["res://toy_plane.glb", "res://玩具飞机.glb"]
const GUN_FILES := ["res://foam_gun.glb", "res://软弹枪.glb"]
const GUN_LEN := {"pistol": 0.14, "smg": 0.2, "shotgun": 0.22}   # 真实长度（米）
const ROOM_SHELL_FILES := ["res://room_shell.glb", "res://房间.glb"]
# 毒圈：每一圈的半径、等待时间、收缩时间、圈外每秒掉血
const ZONE_R := [6.5, 4.0, 2.3, 1.1, 0.3]
const ZONE_WAIT := [25.0, 20.0, 15.0, 12.0]
const ZONE_SHRINK := [15.0, 12.0, 10.0, 8.0]
const ZONE_DPS := [2.0, 4.0, 7.0, 12.0, 20.0]

const FUR_SHADER := """
shader_type spatial;
render_mode cull_back, diffuse_lambert_wrap, specular_schlick_ggx;
uniform sampler2D albedo_tex : source_color, filter_linear_mipmap, repeat_enable;
uniform float layer = 0.0;
uniform float fur_length = 0.05;
uniform float density = 200.0;
uniform float root_dark = 0.7;
varying float fur_mask;
varying vec3 rest;
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
void vertex() {
	fur_mask = UV2.x;
	rest = COLOR.rgb;
	float len = fur_length * UV2.y * fur_mask;
	VERTEX += NORMAL * len * layer + vec3(0.0, -0.15, 0.0) * len * layer * layer;
}
void fragment() {
	if (fur_mask < 0.5) { discard; }
	vec3 g = rest * density;
	vec3 cell = floor(g);
	vec3 f = fract(g) - 0.5;
	float h = mix(0.55, 1.0, hash3(cell));
	vec3 jit = vec3(hash3(cell + 3.1), hash3(cell + 7.7), hash3(cell + 5.3)) - 0.5;
	float d = length(f - jit * 0.35);
	float rad = (1.0 - layer / h) * 0.62;
	float aa = max(fwidth(d), 1e-4) * 1.2;
	float cov = smoothstep(rad + aa, rad - aa, d);
	cov *= 1.0 - smoothstep(1.3, 2.6, length(fwidth(g)));
	ALPHA = cov;
	ALPHA_SCISSOR_THRESHOLD = 0.5;
	ALPHA_ANTIALIASING_EDGE = 0.45;
	vec3 c = texture(albedo_tex, UV).rgb;
	ALBEDO = c * mix(0.86, 1.03, hash3(cell + 11.3)) * mix(root_dark, 1.0, pow(layer, 0.7));
	ROUGHNESS = 0.9;
	SPECULAR = 0.15;
	BACKLIGHT = vec3(0.25) * c;
}
"""

enum { S_PLANE, S_FALL, S_GROUND, S_DEAD }

# ======================= 战斗角色（玩家和 AI 共用） =======================
class Fighter extends CharacterBody3D:
	var game
	var is_player := false
	var display_name := ""
	var hp := 100.0
	var alive := true
	var state := S_PLANE
	var model: Node3D
	var anim: AnimationPlayer
	var idle_name := ""
	var walk_name := ""
	var weapon_id := ""
	var mag := 0
	var reload_t := 0.0
	var cool := 0.0
	var gun_mesh: MeshInstance3D
	var canopy: MeshInstance3D
	var label: Label3D
	var prev_pos := Vector3.ZERO
	var cur_pos := Vector3.ZERO
	var yaw := 0.0
	var kills := 0
	var place := 0
	var fall_t := 0.0
	var jump_at := 0.5           # AI：飞机飞到百分之多少时跳
	# 每帧的操控（玩家由键鼠填，AI 由大脑填）
	var c_dir := Vector3.ZERO
	var c_run := false
	var c_jump := false
	var c_fire := false
	var c_aim_point := Vector3.ZERO
	var c_face_aim := false
	# AI 大脑
	var ai_think := 0.0
	var ai_goal := Vector3.ZERO
	var ai_goal_t := 0.0
	var ai_target = null
	var ai_seen_t := 0.0
	var ai_loot = null
	var ai_loot_t := 0.0
	var ai_black := []
	var ai_strafe := 1.0
	var ai_strafe_t := 0.0
	var stuck_t := 0.0
	var dodge_t := 0.0
	var dodge_dir := Vector3.ZERO

	func eye() -> Vector3:
		return global_position + Vector3(0, game.char_scale * 0.75, 0)

	func chest() -> Vector3:
		return global_position + Vector3(0, game.char_scale * 0.5, 0)

	func forward() -> Vector3:
		return Vector3(sin(yaw), 0, cos(yaw))

	func muzzle() -> Vector3:
		var f := forward()
		var r := Vector3(-f.z, 0, f.x)
		return chest() + f * game.char_scale * 0.35 - r * game.char_scale * 0.25

	func give_weapon(id: String) -> void:
		weapon_id = id
		mag = WEAPONS[id].mag
		reload_t = 0.0
		if gun_mesh and game.gun_src_mesh:
			gun_mesh.visible = true
			gun_mesh.mesh = game.gun_src_mesh
			gun_mesh.material_override = null
			var k: float = GUN_LEN[id] / game.char_scale / game.gun_src_len
			gun_mesh.transform = Transform3D(game.gun_src_basis.scaled(Vector3.ONE * k), Vector3(-0.3, 0.3, 0.12))
		elif gun_mesh:
			gun_mesh.visible = true
			var m := StandardMaterial3D.new()
			m.albedo_color = WEAPONS[id].color
			gun_mesh.material_override = m

	func _physics_process(delta: float) -> void:
		if game == null or game.paused_match:
			return
		cool = max(0.0, cool - delta)
		if reload_t > 0.0:
			reload_t -= delta
			if reload_t <= 0.0 and weapon_id != "":
				mag = WEAPONS[weapon_id].mag
		match state:
			S_PLANE:
				global_position = game.plane.global_position + Vector3(0, -0.15, 0)
				prev_pos = global_position
				cur_pos = global_position
				if not is_player and game.plane_progress() >= jump_at:
					leave_plane()
			S_FALL:
				if not is_player:
					ai_brain(delta)
				fall_t += delta
				var v := velocity
				v.y = max(v.y - game.gravity * delta, -0.7 if fall_t > 0.4 else -6.0)
				v.x = move_toward(v.x, c_dir.x * 0.9, 3.0 * delta)
				v.z = move_toward(v.z, c_dir.z * 0.9, 3.0 * delta)
				velocity = v
				canopy.visible = fall_t > 0.4
				_move()
				if c_dir.length() > 0.1:
					yaw = atan2(c_dir.x, c_dir.z)
				if is_on_floor():
					state = S_GROUND
					canopy.visible = false
			S_GROUND:
				if not is_player:
					ai_brain(delta)
				var speed: float = game.run_speed if c_run else game.walk_speed
				var v := velocity
				v.x = move_toward(v.x, c_dir.x * speed, 8.0 * delta)
				v.z = move_toward(v.z, c_dir.z * speed, 8.0 * delta)
				if not is_on_floor():
					v.y -= game.gravity * delta
				elif c_jump:
					v.y = game.jump_velocity
				velocity = v
				_move()
				if c_face_aim:
					var d := c_aim_point - global_position
					if Vector2(d.x, d.z).length() > 0.01:
						yaw = atan2(d.x, d.z)
				elif c_dir.length() > 0.1:
					yaw = lerp_angle(yaw, atan2(c_dir.x, c_dir.z), clamp(12.0 * delta, 0.0, 1.0))
				if c_fire:
					attack()
				game.try_pickup(self)
				# 卡住检测（AI 用来绕开家具）
				var hs := Vector2(velocity.x, velocity.z).length()
				stuck_t = stuck_t + delta if (c_dir.length() > 0.1 and hs < 0.15) else 0.0
				if global_position.y < -1.0:
					take_damage(999, null, "掉出世界")
			S_DEAD:
				pass
		_update_anim()

	func _move() -> void:
		prev_pos = global_position
		move_and_slide()
		cur_pos = global_position

	func leave_plane() -> void:
		state = S_FALL
		fall_t = 0.0
		velocity = Vector3.ZERO
		model.visible = true
		label.visible = not is_player

	func attack() -> void:
		if cool > 0.0 or reload_t > 0.0:
			return
		if weapon_id == "":
			# 空手挥拳
			cool = 0.5
			for o in game.fighters:
				if o != self and o.alive and o.chest().distance_to(chest()) < game.char_scale * 1.1:
					var to: Vector3 = (o.global_position - global_position)
					if forward().dot(Vector3(to.x, 0, to.z).normalized()) > 0.3:
						o.take_damage(8.0, self, "拳头")
						break
			return
		if mag <= 0:
			start_reload()
			return
		var w: Dictionary = WEAPONS[weapon_id]
		mag -= 1
		cool = w.rate
		var mz := muzzle()
		for i in w.pellets:
			var sp: float = w.spread + (0.0 if is_player else game.bot_spread + mz.distance_to(c_aim_point) * 0.02)
			var dir := (c_aim_point - mz).normalized()
			dir = (dir + Vector3(randf_range(-sp, sp), randf_range(-sp, sp), randf_range(-sp, sp))).normalized()
			var to: Vector3 = mz + dir * w.range
			var hit: Dictionary = game.ray(mz, to, [get_rid()])
			if hit:
				to = hit.position
				if hit.collider.has_method("take_damage") and hit.collider.alive:
					hit.collider.take_damage(w.dmg, self, w.name)
					if is_player:
						game.flash_hit()
			game.spawn_tracer(mz, to, w.color)
		if mag <= 0:
			start_reload()

	func start_reload() -> void:
		if weapon_id != "" and reload_t <= 0.0 and mag < WEAPONS[weapon_id].mag:
			reload_t = WEAPONS[weapon_id].reload

	func take_damage(amount: float, by, what: String) -> void:
		if not alive:
			return
		hp -= amount
		if is_player:
			game.flash_damage()
		elif by != null and ai_target == null:
			ai_target = by        # 被打了就回头找人
			ai_seen_t = game.bot_reaction * 0.5
		if hp <= 0.0:
			die(by, what)

	func die(by, what: String) -> void:
		alive = false
		hp = 0.0
		state = S_DEAD
		collision_layer = 0
		collision_mask = 1
		velocity = Vector3.ZERO
		canopy.visible = false
		label.visible = false
		if by != null and by != self:
			by.kills += 1
		game.on_death(self, by, what)
		var tw := create_tween()
		tw.tween_property(model, "rotation:x", -PI / 2, 0.35)
		if weapon_id != "":
			game.spawn_loot(global_position + Vector3(0, 0.02, 0), weapon_id)
			weapon_id = ""
			gun_mesh.visible = false

	func _update_anim() -> void:
		if anim == null:
			return
		var hs := Vector2(velocity.x, velocity.z).length()
		if state == S_GROUND and hs > 0.05 and walk_name != "":
			if anim.current_animation != walk_name:
				anim.play(walk_name, 0.2)
			anim.speed_scale = clamp(hs / (0.6 * game.char_scale), 0.6, 4.0)
		elif idle_name != "":
			if anim.current_animation != idle_name:
				anim.play(idle_name, 0.25)
			anim.speed_scale = 1.0 if alive else 0.0

	func _process(delta: float) -> void:
		if model == null:
			return
		var f := Engine.get_physics_interpolation_fraction()
		model.global_position = prev_pos.lerp(cur_pos, f)
		if alive:
			model.rotation.y = lerp_angle(model.rotation.y, yaw, clamp(14.0 * delta, 0.0, 1.0))
		label.global_position = model.global_position + Vector3(0, game.char_scale * 1.25, 0)

	# ---------------- AI ----------------
	func ai_brain(delta: float) -> void:
		ai_think -= delta
		ai_seen_t += delta
		ai_strafe_t -= delta
		if ai_strafe_t <= 0.0:
			ai_strafe = -ai_strafe if randf() < 0.6 else ai_strafe
			ai_strafe_t = randf_range(0.6, 1.4)
		if ai_think <= 0.0:
			ai_think = 0.25
			_ai_decide()
		var pos := global_position
		var goal_dir := Vector3(ai_goal.x - pos.x, 0, ai_goal.z - pos.z)
		var dist := goal_dir.length()
		c_dir = goal_dir / dist if dist > 0.05 else Vector3.ZERO
		c_run = dist > 1.0
		c_jump = false
		c_fire = false
		c_face_aim = false
		# 有目标：边走位边开火
		var brawl: bool = weapon_id == "" and ai_target != null and pos.distance_to(ai_target.global_position) < (0.5 if ai_loot != null else 1.2)
		if ai_target != null and ai_target.alive and (weapon_id != "" or brawl):
			var to: Vector3 = ai_target.global_position - pos
			var d2 := Vector2(to.x, to.z).length()
			var side := Vector3(-to.z, 0, to.x).normalized() * ai_strafe
			var keep := 1.8 if weapon_id != "shotgun" else 1.0
			if weapon_id == "":
				keep = 0.15
			var radial: Vector3 = Vector3(to.x, 0, to.z).normalized() * clamp((d2 - keep) * 2.0, -1.0, 1.0)
			c_dir = (radial + side * 0.7).normalized()
			c_run = false
			c_face_aim = true
			c_aim_point = ai_target.chest()
			if ai_seen_t > game.bot_reaction:
				c_fire = true
		# 卡住了：跳一下并换个方向绕
		if dodge_t > 0.0:
			dodge_t -= delta
			c_dir = dodge_dir
		elif stuck_t > 0.35:
			c_jump = true
			dodge_dir = c_dir.rotated(Vector3.UP, PI / 2 * (1 if randf() < 0.5 else -1))
			dodge_t = 0.7
			stuck_t = 0.0

	func _ai_decide() -> void:
		var pos := global_position
		# 1. 看得见的最近敌人
		var best = null
		var bd: float = game.bot_sight
		for o in game.fighters:
			if o == self or not o.alive or o.state == S_PLANE:
				continue
			var d: float = pos.distance_to(o.global_position)
			if d < bd and game.can_see(self, o):
				bd = d
				best = o
		if best != ai_target:
			ai_seen_t = 0.0
		ai_target = best
		# 2. 毒圈：在圈外或快被圈住就往圈心跑
		var zc: Vector3 = game.zone_next_center
		var zr: float = game.zone_next_r
		var dz := Vector2(pos.x - game.zone_center.x, pos.z - game.zone_center.z).length()
		var dn := Vector2(pos.x - zc.x, pos.z - zc.z).length()
		var soon: bool = game.zone_shrinking or game.zone_wait_left() < 8.0
		if dz > game.zone_r * 0.92 or (soon and dn > zr * 0.9):
			ai_goal = zc
			return
		# 3. 没枪就去捡
		if weapon_id == "" or (ai_loot != null and is_instance_valid(ai_loot)):
			if ai_loot == null or not is_instance_valid(ai_loot):
				ai_loot = game.nearest_loot(self, 8.0, ai_black)
				ai_loot_t = 0.0
			if ai_loot != null:
				ai_loot_t += 0.25
				ai_goal = ai_loot.global_position
				if ai_loot_t > 6.0:        # 够不着（在桌上之类），放弃
					ai_black.append(ai_loot)
					ai_loot = null
				return
		# 4. 闲逛：在圈里随便找个点
		ai_goal_t -= 0.25
		if ai_goal_t <= 0.0 or Vector2(pos.x - ai_goal.x, pos.z - ai_goal.z).length() < 0.2:
			var a := randf() * TAU
			var r := sqrt(randf()) * zr * 0.7
			ai_goal = zc + Vector3(cos(a) * r, 0, sin(a) * r)
			ai_goal.x = clamp(ai_goal.x, -ROOM_X + 0.3, ROOM_X - 0.3)
			ai_goal.z = clamp(ai_goal.z, -ROOM_Z + 0.3, ROOM_Z - 0.3)
			ai_goal_t = randf_range(3.0, 6.0)

# ======================= 游戏状态 =======================
var gravity := 9.8
var match_root: Node3D
var fighters: Array = []
var player: Fighter
var loots: Array = []
var plane: Node3D
var gun_src_mesh: Mesh = null        # 你建的软弹枪模型（枪口 +Z，握把底在原点）
var gun_src_basis := Basis.IDENTITY
var gun_src_len := 1.0
var plane_from := Vector3.ZERO
var plane_to := Vector3.ZERO
var plane_t := 0.0
var match_time := 0.0
var paused_match := false
var match_over := false
var zone_phase := 0
var zone_t := 0.0
var zone_shrinking := false
var zone_center := Vector3.ZERO
var zone_r := 6.5
var zone_from_center := Vector3.ZERO
var zone_from_r := 6.5
var zone_next_center := Vector3.ZERO
var zone_next_r := 6.5
var zone_mesh: MeshInstance3D
var zone_tick := 0.0
var player_choice := 0
var shader: Shader
# 相机
var cam_yaw: Node3D
var cam_pitch: Node3D
var cam: Camera3D
var aiming := false
var cam_vis := Vector3.ZERO
# 界面
var ui: CanvasLayer
var menu: Control
var hud: Control
var lbl_alive: Label
var lbl_zone: Label
var lbl_weapon: Label
var lbl_hint: Label
var hp_bar: ProgressBar
var crosshair: Label
var feed: VBoxContainer
var result_panel: PanelContainer
var lbl_result: Label
var dmg_flash: ColorRect

func _ready() -> void:
	get_viewport().msaa_3d = Viewport.MSAA_4X
	gravity = ProjectSettings.get_setting("physics/3d/default_gravity", 9.8)
	shader = Shader.new()
	shader.code = FUR_SHADER
	_build_env()
	_build_camera()
	_build_ui()
	_show_menu()

# ======================= 环境 / 相机 =======================
func _build_env() -> void:
	var env := WorldEnvironment.new()
	var e := Environment.new()
	e.background_mode = Environment.BG_COLOR
	e.background_color = Color(0.93, 0.9, 0.84)
	e.ambient_light_source = Environment.AMBIENT_SOURCE_COLOR
	e.ambient_light_color = Color(1.0, 0.95, 0.88)
	e.ambient_light_energy = 0.4
	e.tonemap_mode = Environment.TONE_MAPPER_FILMIC
	e.ssao_enabled = true
	env.environment = e
	add_child(env)
	var sun := DirectionalLight3D.new()       # 从窗户照进来的阳光
	sun.rotation_degrees = Vector3(-58, -35, 0)
	sun.light_energy = 0.95
	sun.light_color = Color(1.0, 0.95, 0.85)
	sun.shadow_enabled = true
	sun.directional_shadow_max_distance = 14.0
	add_child(sun)

func _build_camera() -> void:
	cam_yaw = Node3D.new()
	add_child(cam_yaw)
	cam_pitch = Node3D.new()
	cam_pitch.rotation.x = deg_to_rad(-12)
	cam_yaw.add_child(cam_pitch)
	cam = Camera3D.new()
	cam.fov = 70
	cam.near = 0.02
	cam_pitch.add_child(cam)
	cam.current = true
	cam_yaw.position = Vector3(0, 1.6, 6)

# ======================= 房间 =======================
func _box(parent: Node3D, center: Vector3, size: Vector3, color: Color, collide := true, basis := Basis.IDENTITY) -> void:
	var mi := MeshInstance3D.new()
	var bm := BoxMesh.new()
	bm.size = size
	var m := StandardMaterial3D.new()
	m.albedo_color = color
	m.roughness = 0.85
	bm.material = m
	mi.mesh = bm
	if collide:
		var sb := StaticBody3D.new()
		sb.transform = Transform3D(basis, center)
		var cs := CollisionShape3D.new()
		var sh := BoxShape3D.new()
		sh.size = size
		cs.shape = sh
		sb.add_child(cs)
		sb.add_child(mi)
		parent.add_child(sb)
	else:
		mi.transform = Transform3D(basis, center)
		parent.add_child(mi)

func _ramp(parent: Node3D, a: Vector3, b: Vector3, width: float, color: Color) -> void:
	# 斜靠的书/尺子/砧板，让小队员能爬上家具
	var d := b - a
	var basis := Basis.looking_at(d.normalized(), Vector3.UP)
	_box(parent, (a + b) / 2 + basis.y * 0.01, Vector3(width, 0.02, d.length()), color, true, basis)

func _legs(parent: Node3D, cx: float, cz: float, w: float, d: float, h: float, t: float, color: Color) -> void:
	for sx in [-1, 1]:
		for sz in [-1, 1]:
			_box(parent, Vector3(cx + sx * (w / 2 - t), h / 2, cz + sz * (d / 2 - t)), Vector3(t, h, t), color)

# 你建的家具：找到 GLB 就摆进去（原点在底面中心，-colonly 碰撞自动生效），找不到返回 false 用盒子
func _place_model(root: Node3D, files: Array, pos: Vector3, yaw_deg := 0.0) -> bool:
	for f in files:
		if ResourceLoader.exists(f):
			var inst: Node3D = load(f).instantiate()
			inst.position = pos
			inst.rotation_degrees.y = yaw_deg
			root.add_child(inst)
			return true
	return false

func _build_room(root: Node3D) -> void:
	var wall := Color(0.92, 0.89, 0.82)
	var wood := Color(0.62, 0.45, 0.3)
	var dark_wood := Color(0.4, 0.28, 0.2)
	# 房间壳：优先用你在 Blender 建的 GLB（放在 res:// 根目录），找不到才用程序盒子
	var shell_scene: PackedScene = null
	for f in ROOM_SHELL_FILES:
		if ResourceLoader.exists(f):
			shell_scene = load(f)
			break
	if shell_scene:
		root.add_child(shell_scene.instantiate())
	else:
		# 地板 + 墙
		_box(root, Vector3(-2, -0.05, 0), Vector3(6.2, 0.1, 8.2), Color(0.72, 0.56, 0.4))     # 客厅木地板
		_box(root, Vector3(3, -0.05, 0), Vector3(4.0, 0.1, 8.2), Color(0.86, 0.86, 0.84))     # 厨房瓷砖
		_box(root, Vector3(0, ROOM_H / 2, -ROOM_Z - 0.05), Vector3(10.2, ROOM_H, 0.1), wall)
		_box(root, Vector3(0, ROOM_H / 2, ROOM_Z + 0.05), Vector3(10.2, ROOM_H, 0.1), wall)
		_box(root, Vector3(-ROOM_X - 0.05, ROOM_H / 2, 0), Vector3(0.1, ROOM_H, 8.2), wall)
		_box(root, Vector3(ROOM_X + 0.05, ROOM_H / 2, 0), Vector3(0.1, ROOM_H, 8.2), wall)
		_box(root, Vector3(1, ROOM_H / 2, -2.4), Vector3(0.1, ROOM_H, 3.2), wall)          # 客厅/厨房隔墙，中间留门
		_box(root, Vector3(1, ROOM_H / 2, 2.4), Vector3(0.1, ROOM_H, 3.2), wall)
		_box(root, Vector3(1, 2.4, 0), Vector3(0.1, 0.6, 1.6), wall)
		_box(root, Vector3(-2, 1.5, -ROOM_Z + 0.01), Vector3(2.4, 1.2, 0.02), Color(0.75, 0.88, 1.0), false)  # 窗
	# 客厅
	_box(root, Vector3(-2, 0.005, -0.3), Vector3(3.2, 0.01, 2.2), Color(0.75, 0.32, 0.3))          # 地毯
	if not _place_model(root, ["res://sofa.glb", "res://沙发.glb"], Vector3(-2, 0, -3.35)):
		_box(root, Vector3(-2, 0.22, -3.35), Vector3(2.3, 0.44, 0.9), Color(0.35, 0.45, 0.6))          # 沙发
		_box(root, Vector3(-2, 0.62, -3.72), Vector3(2.3, 0.36, 0.18), Color(0.33, 0.43, 0.58))
		_box(root, Vector3(-3.07, 0.3, -3.35), Vector3(0.18, 0.6, 0.9), Color(0.33, 0.43, 0.58))
		_box(root, Vector3(-0.93, 0.3, -3.35), Vector3(0.18, 0.6, 0.9), Color(0.33, 0.43, 0.58))
	_box(root, Vector3(-2, 0.41, -1.2), Vector3(1.2, 0.04, 0.6), wood)                               # 茶几
	_legs(root, -2, -1.2, 1.2, 0.6, 0.39, 0.05, dark_wood)
	# 电视柜、电视：模型正面朝 +Z，转 180° 面向沙发
	if not _place_model(root, ["res://tv_stand.glb", "res://电视柜.glb"], Vector3(-2, 0, 3.75), 180.0):
		_box(root, Vector3(-2, 0.22, 3.75), Vector3(1.8, 0.44, 0.4), dark_wood)                      # 电视柜
	if not _place_model(root, ["res://tv.glb", "res://电视.glb"], Vector3(-2, 0.44, 3.82), 180.0):
		_box(root, Vector3(-2, 0.86, 3.85), Vector3(1.4, 0.8, 0.05), Color(0.08, 0.08, 0.1))        # 电视
	_box(root, Vector3(-4.8, 1.0, 0.5), Vector3(0.35, 2.0, 1.2), dark_wood)                         # 书架外框
	for i in 4:
		_box(root, Vector3(-4.6, 0.4 + i * 0.4, 0.5), Vector3(0.1, 0.03, 1.2), wood)                 # 书架隔板（伸出来能站人）
	if not _place_model(root, ["res://armchair.glb", "res://单人沙发.glb"], Vector3(0.1, 0, -2.6)):   # 单人沙发
		_box(root, Vector3(0.1, 0.2, -2.6), Vector3(0.8, 0.4, 0.8), Color(0.55, 0.6, 0.4))             # 单人沙发
		_box(root, Vector3(0.1, 0.55, -2.95), Vector3(0.8, 0.3, 0.12), Color(0.5, 0.55, 0.36))
	_box(root, Vector3(-4.5, 0.18, -3.5), Vector3(0.36, 0.36, 0.36), Color(0.75, 0.5, 0.35))       # 花盆
	_box(root, Vector3(-4.5, 0.6, -3.5), Vector3(0.5, 0.5, 0.5), Color(0.3, 0.55, 0.3), false)
	var rng := RandomNumberGenerator.new()                                                         # 地上散落的积木（掩体）
	rng.seed = 11
	for i in 14:
		var s := rng.randf_range(0.06, 0.16)
		_box(root, Vector3(rng.randf_range(-4.5, 0.5), s / 2, rng.randf_range(-2.2, 3.2)), Vector3(s, s, s),
			Color.from_hsv(rng.randf(), 0.6, 0.9), true, Basis(Vector3.UP, rng.randf() * PI))
	# 斜坡：书和尺子靠在家具上
	_ramp(root, Vector3(-2.6, 0.0, -1.9), Vector3(-2.6, 0.44, -2.95), 0.25, Color(0.9, 0.8, 0.3))     # 地板 → 沙发
	_ramp(root, Vector3(-2.0, 0.0, -0.1), Vector3(-2.0, 0.43, -0.9), 0.2, Color(0.3, 0.5, 0.85))      # 地板 → 茶几
	_ramp(root, Vector3(0.1, 0.0, -1.35), Vector3(0.1, 0.4, -2.18), 0.2, Color(0.45, 0.75, 0.5))      # 地板 → 单人沙发
	_ramp(root, Vector3(-2.0, 0.0, 2.6), Vector3(-2.0, 0.44, 3.55), 0.25, Color(0.85, 0.35, 0.35))     # 地板 → 电视柜
	_ramp(root, Vector3(-3.8, 0.0, 0.5), Vector3(-4.55, 0.42, 0.5), 0.2, Color(0.95, 0.95, 0.9))      # 地板 → 书架第一层
	# 厨房
	_box(root, Vector3(4.7, 0.45, 0.6), Vector3(0.6, 0.9, 6.0), Color(0.95, 0.95, 0.95))            # 橱柜台面
	_box(root, Vector3(4.6, 0.9, -3.5), Vector3(0.75, 1.8, 0.75), Color(0.85, 0.88, 0.9))            # 冰箱
	_box(root, Vector3(3.0, 0.75, 0.0), Vector3(1.6, 0.04, 0.9), wood)                                # 餐桌
	_legs(root, 3.0, 0.0, 1.6, 0.9, 0.73, 0.06, dark_wood)
	for cz in [-0.75, 0.75]:
		for cx in [2.55, 3.45]:
			_box(root, Vector3(cx, 0.45, cz), Vector3(0.42, 0.04, 0.42), wood)                         # 椅子
			_legs(root, cx, cz, 0.42, 0.42, 0.43, 0.04, dark_wood)
			_box(root, Vector3(cx, 0.7, cz + sign(cz) * 0.19), Vector3(0.42, 0.45, 0.04), wood)
	_ramp(root, Vector3(2.55, 0.0, -1.7), Vector3(2.55, 0.47, -0.97), 0.22, Color(0.8, 0.65, 0.45))   # 砧板：地板 → 椅子
	_ramp(root, Vector3(2.55, 0.47, -0.6), Vector3(2.55, 0.77, -0.2), 0.22, Color(0.8, 0.65, 0.45))   # 椅子 → 餐桌
	_ramp(root, Vector3(2.4, 0.0, 2.6), Vector3(4.4, 0.9, 2.6), 0.25, Color(0.6, 0.4, 0.3))          # 擀面板：地板 → 台面

# ======================= 菜单 / 界面 =======================
func _label(parent: Control, text: String, size: int, color := Color.WHITE) -> Label:
	var l := Label.new()
	l.text = text
	l.add_theme_font_size_override("font_size", size)
	l.add_theme_color_override("font_color", color)
	l.add_theme_color_override("font_outline_color", Color(0, 0, 0, 0.8))
	l.add_theme_constant_override("outline_size", 6)
	parent.add_child(l)
	return l

func _build_ui() -> void:
	ui = CanvasLayer.new()
	add_child(ui)
	# --- 菜单 ---
	menu = ColorRect.new()
	menu.color = Color(0.1, 0.12, 0.16, 0.85)
	menu.set_anchors_preset(Control.PRESET_FULL_RECT)
	ui.add_child(menu)
	var box := VBoxContainer.new()
	_pin(box, 0.5, 0.5, -220, -200, 440, 400)
	box.add_theme_constant_override("separation", 14)
	menu.add_child(box)
	_label(box, "毛绒小队 · 小游戏合集", 40).horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_label(box, "选一个板块开始", 20, Color(0.8, 0.8, 0.8)).horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	var pick := HBoxContainer.new()
	box.add_child(pick)
	_label(pick, "我的角色：", 20)
	var opt := OptionButton.new()
	for r in ROSTER:
		opt.add_item(r.name)
	opt.item_selected.connect(func(i): player_choice = i)
	opt.custom_minimum_size = Vector2(200, 0)
	pick.add_child(opt)
	var b1 := Button.new()
	b1.text = "🐔 客厅吃鸡（你 + 9 个 AI）"
	b1.add_theme_font_size_override("font_size", 24)
	b1.custom_minimum_size = Vector2(0, 64)
	b1.pressed.connect(start_royale)
	box.add_child(b1)
	for t in ["更多板块，敬请期待", "更多板块，敬请期待"]:
		var b := Button.new()
		b.text = t
		b.disabled = true
		b.custom_minimum_size = Vector2(0, 48)
		box.add_child(b)
	# --- 战斗 HUD ---
	hud = Control.new()
	hud.set_anchors_preset(Control.PRESET_FULL_RECT)
	hud.mouse_filter = Control.MOUSE_FILTER_IGNORE
	ui.add_child(hud)
	dmg_flash = ColorRect.new()
	dmg_flash.color = Color(1, 0, 0, 0)
	dmg_flash.set_anchors_preset(Control.PRESET_FULL_RECT)
	dmg_flash.mouse_filter = Control.MOUSE_FILTER_IGNORE
	hud.add_child(dmg_flash)
	lbl_alive = _label(hud, "", 26)
	_pin(lbl_alive, 1.0, 0.0, -180, 16, 160, 40)
	lbl_alive.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	lbl_zone = _label(hud, "", 22, Color(0.7, 0.85, 1.0))
	_pin(lbl_zone, 0.5, 0.0, -260, 16, 520, 36)
	lbl_zone.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	lbl_hint = _label(hud, "", 26, Color(1, 0.9, 0.5))
	_pin(lbl_hint, 0.5, 0.5, -260, 80, 520, 40)
	lbl_hint.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	crosshair = _label(hud, "+", 30)
	_pin(crosshair, 0.5, 0.5, -20, -22, 40, 44)
	crosshair.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	hp_bar = ProgressBar.new()
	hp_bar.max_value = 100
	hp_bar.show_percentage = false
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color(0.4, 0.95, 0.5)
	hp_bar.add_theme_stylebox_override("fill", sb)
	hud.add_child(hp_bar)
	_pin(hp_bar, 0.5, 1.0, -200, -60, 400, 22)
	lbl_weapon = _label(hud, "", 24)
	_pin(lbl_weapon, 1.0, 1.0, -380, -70, 360, 40)
	lbl_weapon.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	feed = VBoxContainer.new()
	feed.position = Vector2(16, 60)
	hud.add_child(feed)
	# --- 结算 ---
	result_panel = PanelContainer.new()
	ui.add_child(result_panel)
	_pin(result_panel, 0.5, 0.5, -240, -130, 480, 260)
	var rb := VBoxContainer.new()
	rb.add_theme_constant_override("separation", 16)
	result_panel.add_child(rb)
	lbl_result = _label(rb, "", 30)
	lbl_result.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	lbl_result.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	var again := Button.new()
	again.text = "再来一局"
	again.custom_minimum_size = Vector2(0, 50)
	again.pressed.connect(start_royale)
	rb.add_child(again)
	var back := Button.new()
	back.text = "返回板块选择"
	back.custom_minimum_size = Vector2(0, 50)
	back.pressed.connect(_show_menu)
	rb.add_child(back)

func _pin(c: Control, ax: float, ay: float, ox: float, oy: float, w: float, h: float) -> void:
	c.anchor_left = ax
	c.anchor_right = ax
	c.anchor_top = ay
	c.anchor_bottom = ay
	c.offset_left = ox
	c.offset_top = oy
	c.offset_right = ox + w
	c.offset_bottom = oy + h

func _show_menu() -> void:
	_clear_match()
	menu.visible = true
	hud.visible = false
	result_panel.visible = false
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	cam_yaw.position = Vector3(0, 1.4, 5.5)
	cam_yaw.rotation = Vector3.ZERO
	cam_pitch.rotation.x = deg_to_rad(-12)
	cam.position = Vector3.ZERO

func add_feed(text: String) -> void:
	var l := _label(feed, text, 18)
	var tw := create_tween()
	tw.tween_interval(5.0)
	tw.tween_property(l, "modulate:a", 0.0, 1.0)
	tw.tween_callback(l.queue_free)

func flash_damage() -> void:
	dmg_flash.color.a = 0.28
	var tw := create_tween()
	tw.tween_property(dmg_flash, "color:a", 0.0, 0.35)

func flash_hit() -> void:
	crosshair.add_theme_color_override("font_color", Color(1, 0.25, 0.2))
	var tw := create_tween()
	tw.tween_interval(0.12)
	tw.tween_callback(func(): crosshair.add_theme_color_override("font_color", Color.WHITE))

# ======================= 开局 =======================
func _clear_match() -> void:
	if match_root:
		match_root.queue_free()
	match_root = null
	fighters.clear()
	loots.clear()
	player = null
	match_over = false

func start_royale() -> void:
	_clear_match()
	menu.visible = false
	result_panel.visible = false
	hud.visible = true
	for c in feed.get_children():
		c.queue_free()
	match_root = Node3D.new()
	add_child(match_root)
	_build_room(match_root)
	_load_gun_model()
	_build_plane()
	_build_zone()
	# 角色：你选的 + 其余随机
	var order := range(ROSTER.size())
	order.erase(player_choice)
	order.shuffle()
	_spawn_fighter(player_choice, true)
	for i in bot_count:
		_spawn_fighter(order[i % order.size()], false)
	match_time = 0.0
	plane_t = 0.0
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
	cam.position = Vector3(0, 0, 2.0)
	await get_tree().physics_frame
	await get_tree().physics_frame
	_scatter_loot(42)
	add_feed("飞机起飞！按 空格 跳伞")

func _spawn_fighter(idx: int, is_player: bool) -> void:
	var info: Dictionary = ROSTER[idx]
	var file: String = info.file if ResourceLoader.exists(info.file) else FALLBACK_FILE
	var f := Fighter.new()
	f.game = self
	f.is_player = is_player
	f.display_name = ("你（%s）" % info.name) if is_player else info.name
	f.collision_layer = 2
	f.collision_mask = 1
	f.floor_max_angle = deg_to_rad(50)
	f.floor_snap_length = 0.05
	var cs := CollisionShape3D.new()
	var cap := CapsuleShape3D.new()
	cap.radius = char_scale * 0.22
	cap.height = char_scale * 0.95
	cs.shape = cap
	cs.position.y = char_scale * 0.48
	f.add_child(cs)
	match_root.add_child(f)
	var scene: PackedScene = load(file)
	if scene:
		f.model = scene.instantiate()
	else:
		push_error("找不到模型：" + file)
		f.model = Node3D.new()
	f.add_child(f.model)
	f.model.top_level = true
	f.model.scale = Vector3.ONE * char_scale
	f.model.visible = false
	var mi := _find_mesh(f.model)
	if mi:
		var shells := fur_shells_player if is_player else fur_shells_bot
		_setup_material(mi, info.fur and shells > 0, shells)
	f.anim = _find_anim_player(f.model)
	if f.anim:
		for n in f.anim.get_animation_list():
			var l := String(n).to_lower()
			if "idle" in l: f.idle_name = n
			elif "walk" in l: f.walk_name = n
		if f.idle_name != "":
			f.anim.play(f.idle_name)
			f.anim.seek(randf() * 1.5, true)
	# 枪（挂在模型右手位置，模型空间单位 = 1 米高）
	f.gun_mesh = MeshInstance3D.new()
	var gm := BoxMesh.new()
	gm.size = Vector3(0.09, 0.12, 0.42)
	f.gun_mesh.mesh = gm
	f.gun_mesh.position = Vector3(-0.3, 0.42, 0.22)
	f.gun_mesh.visible = false
	f.model.add_child(f.gun_mesh)
	# 纸巾降落伞
	f.canopy = MeshInstance3D.new()
	var pm := BoxMesh.new()
	pm.size = Vector3(1.4, 0.03, 1.4)
	var pmat := StandardMaterial3D.new()
	pmat.albedo_color = Color(0.98, 0.98, 0.96)
	pm.material = pmat
	f.canopy.mesh = pm
	f.canopy.position = Vector3(0, 1.7, 0)
	f.canopy.visible = false
	f.model.add_child(f.canopy)
	f.label = Label3D.new()
	f.label.text = f.display_name
	f.label.billboard = BaseMaterial3D.BILLBOARD_ENABLED
	f.label.pixel_size = 0.0012
	f.label.font_size = 40
	f.label.outline_size = 10
	f.label.modulate = Color(1, 0.85, 0.6) if not is_player else Color(0.6, 1, 0.7)
	f.label.visible = false
	f.label.top_level = true
	f.add_child(f.label)
	f.jump_at = randf_range(0.12, 0.88)
	f.yaw = randf() * TAU
	fighters.append(f)
	if is_player:
		player = f

func _setup_material(mi: MeshInstance3D, fur: bool, shells: int) -> void:
	var base := mi.get_active_material(0)
	if not (base is BaseMaterial3D):
		return
	var first: BaseMaterial3D = base.duplicate()
	first.vertex_color_use_as_albedo = false     # 顶点色是毛发数据，不是颜色
	if fur and first.albedo_texture:
		var prev: Material = first
		for i in shells:
			var m := ShaderMaterial.new()
			m.shader = shader
			m.set_shader_parameter("albedo_tex", first.albedo_texture)
			m.set_shader_parameter("layer", float(i + 1) / shells)
			m.set_shader_parameter("fur_length", fur_length)
			m.set_shader_parameter("density", fur_density)
			prev.next_pass = m
			prev = m
	mi.set_surface_override_material(0, first)

func _find_mesh(n: Node) -> MeshInstance3D:
	if n is MeshInstance3D:
		return n
	for c in n.get_children():
		var r := _find_mesh(c)
		if r:
			return r
	return null

func _find_anim_player(n: Node) -> AnimationPlayer:
	if n is AnimationPlayer:
		return n
	for c in n.get_children():
		var r := _find_anim_player(c)
		if r:
			return r
	return null

# ======================= 飞机 =======================
func _build_plane() -> void:
	plane = Node3D.new()
	match_root.add_child(plane)
	var plane_scene: PackedScene = null
	for f in PLANE_FILES:
		if ResourceLoader.exists(f):
			plane_scene = load(f)
			break
	if plane_scene:
		var model: Node3D = plane_scene.instantiate()
		model.position = Vector3(0, -0.08, 0)     # 模型原点在机腹，往下放一点让队员挂在机腹下
		plane.add_child(model)
		var prop := Node3D.new()                  # AI 模型螺旋桨没拆开，留个空节点不让旧代码报错
		prop.name = "Prop"
		plane.add_child(prop)
	else:
		var yellow := Color(1.0, 0.8, 0.2)
		var red := Color(0.9, 0.25, 0.2)
		_box(plane, Vector3(0, 0, 0), Vector3(0.22, 0.2, 0.9), yellow, false)            # 机身
		_box(plane, Vector3(0, 0.02, 0.05), Vector3(1.3, 0.03, 0.25), red, false)        # 机翼
		_box(plane, Vector3(0, 0.05, -0.4), Vector3(0.5, 0.02, 0.14), red, false)        # 尾翼
		_box(plane, Vector3(0, 0.15, -0.4), Vector3(0.02, 0.18, 0.14), red, false)
		var prop := Node3D.new()
		prop.name = "Prop"
		prop.position = Vector3(0, 0, 0.47)
		plane.add_child(prop)
		_box(prop, Vector3.ZERO, Vector3(0.36, 0.04, 0.01), Color(0.2, 0.2, 0.2), false)
	var a := randf() * TAU
	var dir := Vector3(cos(a), 0, sin(a))
	plane_from = -dir * 7.0 + Vector3(0, 2.25, 0)
	plane_to = dir * 7.0 + Vector3(0, 2.25, 0)
	plane_from.x = clamp(plane_from.x, -ROOM_X + 0.4, ROOM_X - 0.4)
	plane_to.x = clamp(plane_to.x, -ROOM_X + 0.4, ROOM_X - 0.4)
	plane_from.z = clamp(plane_from.z, -ROOM_Z + 0.4, ROOM_Z - 0.4)
	plane_to.z = clamp(plane_to.z, -ROOM_Z + 0.4, ROOM_Z - 0.4)
	plane.global_position = plane_from
	plane.look_at_from_position(plane_from, plane_to, Vector3.UP)
	plane.rotate_object_local(Vector3.UP, PI)     # 机头朝 +Z 建的，转过来

func _load_gun_model() -> void:
	if gun_src_mesh:
		return
	for f in GUN_FILES:
		if ResourceLoader.exists(f):
			var inst: Node3D = load(f).instantiate()
			var mi := _find_mesh(inst)
			if mi:
				gun_src_mesh = mi.mesh
				gun_src_basis = mi.transform.basis
				var box := Transform3D(gun_src_basis, Vector3.ZERO) * mi.get_aabb()
				gun_src_len = max(box.size.z, 0.001)
			inst.free()
			return

func zone_wait_left() -> float:
	if zone_phase >= ZONE_WAIT.size() or zone_shrinking:
		return 0.0
	return ZONE_WAIT[zone_phase] - zone_t

func plane_progress() -> float:
	return clamp(plane_t / plane_time, 0.0, 1.0)

# ======================= 毒圈 =======================
func _build_zone() -> void:
	zone_phase = 0
	zone_t = 0.0
	zone_shrinking = false
	zone_center = Vector3.ZERO
	zone_r = ZONE_R[0]
	_pick_next_zone()
	zone_mesh = MeshInstance3D.new()
	var cm := CylinderMesh.new()
	cm.top_radius = 1.0
	cm.bottom_radius = 1.0
	cm.height = ROOM_H
	cm.cap_top = false
	cm.cap_bottom = false
	cm.radial_segments = 64
	var m := StandardMaterial3D.new()
	m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	m.albedo_color = Color(0.3, 0.6, 1.0, 0.22)
	m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	m.cull_mode = BaseMaterial3D.CULL_DISABLED
	cm.material = m
	zone_mesh.mesh = cm
	match_root.add_child(zone_mesh)

func _pick_next_zone() -> void:
	var i: int = min(zone_phase + 1, ZONE_R.size() - 1)
	zone_next_r = ZONE_R[i]
	for tries in 30:
		var a := randf() * TAU
		var off: float = sqrt(randf()) * max(0.0, zone_r - zone_next_r)
		var c := zone_center + Vector3(cos(a) * off, 0, sin(a) * off)
		var margin: float = min(zone_next_r, 1.0)
		if abs(c.x) < ROOM_X - margin and abs(c.z) < ROOM_Z - margin:
			zone_next_center = c
			return
	zone_next_center = zone_center

func _update_zone(delta: float) -> void:
	if zone_phase >= ZONE_WAIT.size():
		lbl_zone.text = "最终圈"
	elif not zone_shrinking:
		zone_t += delta
		var left: float = ZONE_WAIT[zone_phase] - zone_t
		lbl_zone.text = "安全区 %d 秒后缩小" % ceil(left)
		if left <= 0:
			zone_shrinking = true
			zone_t = 0.0
			zone_from_center = zone_center
			zone_from_r = zone_r
			add_feed("安全区开始缩小！")
	else:
		zone_t += delta
		var k: float = clamp(zone_t / ZONE_SHRINK[zone_phase], 0.0, 1.0)
		zone_center = zone_from_center.lerp(zone_next_center, k)
		zone_r = lerp(zone_from_r, zone_next_r, k)
		lbl_zone.text = "安全区正在缩小……"
		if k >= 1.0:
			zone_shrinking = false
			zone_t = 0.0
			zone_phase += 1
			_pick_next_zone()
	zone_mesh.position = zone_center + Vector3(0, ROOM_H / 2, 0)
	zone_mesh.scale = Vector3(zone_r, 1, zone_r)
	# 圈外掉血（每 0.5 秒结算一次）
	zone_tick += delta
	if zone_tick >= 0.5:
		zone_tick = 0.0
		var dps: float = ZONE_DPS[min(zone_phase, ZONE_DPS.size() - 1)]
		for f in fighters:
			if f.alive and f.state == S_GROUND:
				var p: Vector3 = f.global_position
				if Vector2(p.x - zone_center.x, p.z - zone_center.z).length() > zone_r:
					f.take_damage(dps * 0.5, null, "毒圈")

# ======================= 物资 =======================
func _scatter_loot(n: int) -> void:
	var placed := 0
	var tries := 0
	while placed < n and tries < n * 6:
		tries += 1
		var x := randf_range(-ROOM_X + 0.2, ROOM_X - 0.2)
		var z := randf_range(-ROOM_Z + 0.2, ROOM_Z - 0.2)
		var hit := ray(Vector3(x, ROOM_H - 0.1, z), Vector3(x, -0.5, z), [], 1)
		if hit.is_empty() or hit.normal.y < 0.9:
			continue
		var r := randf()
		var id := "pistol" if r < 0.3 else ("smg" if r < 0.5 else ("shotgun" if r < 0.65 else "bandage"))
		spawn_loot(hit.position, id)
		placed += 1

func spawn_loot(pos: Vector3, id: String) -> void:
	var n := Node3D.new()
	n.set_meta("id", id)
	match_root.add_child(n)
	n.global_position = pos
	var vis := Node3D.new()
	vis.name = "Vis"
	n.add_child(vis)
	if id == "bandage":
		_box(vis, Vector3(0, 0.03, 0), Vector3(0.1, 0.015, 0.04), Color(0.95, 0.75, 0.6), false)
		_box(vis, Vector3(0, 0.04, 0), Vector3(0.03, 0.017, 0.042), Color(1, 1, 1), false)
	else:
		var c: Color = WEAPONS[id].color
		var L: float = GUN_LEN[id]
		if gun_src_mesh:
			var gm := MeshInstance3D.new()
			gm.mesh = gun_src_mesh
			gm.transform = Transform3D(gun_src_basis.scaled(Vector3.ONE * (L / gun_src_len)), Vector3.ZERO)
			vis.add_child(gm)
		else:
			_box(vis, Vector3(0, 0.05, 0), Vector3(0.035, 0.04, L), c, false)
			_box(vis, Vector3(0, 0.025, -L * 0.3), Vector3(0.03, 0.06, 0.03), c.darkened(0.3), false)
	var glow := OmniLight3D.new()
	glow.light_color = Color(1, 0.9, 0.5)
	glow.light_energy = 0.25
	glow.omni_range = 0.25
	glow.position.y = 0.1
	n.add_child(glow)
	loots.append(n)

func try_pickup(f: Fighter) -> void:
	for l in loots:
		if not is_instance_valid(l):
			continue
		if l.global_position.distance_to(f.global_position) > 0.18:
			continue
		var id: String = l.get_meta("id")
		if id == "bandage":
			if f.hp >= 100.0:
				continue
			f.hp = min(100.0, f.hp + 35.0)
			if f.is_player:
				add_feed("用了创可贴 +35")
		else:
			if f.weapon_id != "" and WEAPONS[f.weapon_id].rank >= WEAPONS[id].rank:
				continue
			if f.weapon_id != "":
				var old := f.weapon_id
				spawn_loot(f.global_position + Vector3(0.12, 0.0, 0), old)
			f.give_weapon(id)
			if f.is_player:
				add_feed("捡到 " + WEAPONS[id].name)
		loots.erase(l)
		l.queue_free()
		return

func nearest_loot(f: Fighter, max_d: float, black: Array):
	var best = null
	var bd := max_d
	for l in loots:
		if not is_instance_valid(l) or l in black:
			continue
		if l.get_meta("id") == "bandage" and f.hp > 70:
			continue
		if l.global_position.y > f.global_position.y + 0.2:   # 太高够不着
			continue
		var d: float = l.global_position.distance_to(f.global_position)
		if d < bd:
			bd = d
			best = l
	return best

# ======================= 工具 =======================
func ray(from: Vector3, to: Vector3, exclude: Array = [], mask := 3) -> Dictionary:
	var q := PhysicsRayQueryParameters3D.create(from, to, mask, exclude)
	return get_world_3d().direct_space_state.intersect_ray(q)

func can_see(a: Fighter, b: Fighter) -> bool:
	var hit := ray(a.eye(), b.chest(), [a.get_rid()])
	return hit.is_empty() or hit.collider == b

func spawn_tracer(a: Vector3, b: Vector3, color: Color) -> void:
	var d := b - a
	if d.length() < 0.01:
		return
	var mi := MeshInstance3D.new()
	var cm := CylinderMesh.new()
	cm.top_radius = 0.004
	cm.bottom_radius = 0.004
	cm.height = d.length()
	cm.radial_segments = 6
	var m := StandardMaterial3D.new()
	m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	m.albedo_color = color
	m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	cm.material = m
	mi.mesh = cm
	match_root.add_child(mi)
	mi.global_transform = Transform3D(Basis(Quaternion(Vector3.UP, d.normalized())), (a + b) / 2)
	var tw := create_tween()
	tw.tween_property(m, "albedo_color:a", 0.0, 0.15)
	tw.tween_callback(mi.queue_free)

func alive_count() -> int:
	var n := 0
	for f in fighters:
		if f.alive:
			n += 1
	return n

func on_death(f: Fighter, by, what: String) -> void:
	f.place = alive_count() + 1
	if by != null and by != f:
		add_feed("%s 用%s淘汰了 %s" % [by.display_name, what, f.display_name])
	else:
		add_feed("%s 被%s淘汰" % [f.display_name, what])
	if f == player:
		_end_match(false)
	elif alive_count() == 1 and player.alive:
		_end_match(true)

func _end_match(win: bool) -> void:
	if match_over:
		return
	match_over = true
	await get_tree().create_timer(1.2).timeout
	if win:
		lbl_result.text = "大吉大利，今晚吃鸡！\n淘汰 %d 人" % player.kills
	else:
		lbl_result.text = "你是第 %d 名\n淘汰 %d 人" % [player.place, player.kills]
	result_panel.visible = true
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

# ======================= 每帧 =======================
func _unhandled_input(event: InputEvent) -> void:
	if player == null:
		return
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		var s := mouse_sensitivity * (0.5 if aiming else 1.0)
		cam_yaw.rotation.y -= event.relative.x * s
		cam_pitch.rotation.x = clamp(cam_pitch.rotation.x - event.relative.y * s, deg_to_rad(-75), deg_to_rad(40))
	elif event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT and not result_panel.visible:
		Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
	elif event is InputEventKey and event.pressed:
		if event.keycode == KEY_ESCAPE:
			Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		elif event.keycode == KEY_R:
			player.start_reload()
		elif event.keycode == KEY_SPACE and player.state == S_PLANE:
			player.leave_plane()

func _physics_process(delta: float) -> void:
	if match_root == null or player == null:
		return
	match_time += delta
	# 飞机
	plane_t += delta
	var k := plane_progress()
	plane.global_position = plane_from.lerp(plane_to, k)
	var prop := plane.get_node_or_null("Prop")
	if prop:
		prop.rotate_z(delta * 40.0)
	if k >= 1.0:
		for f in fighters:
			if f.state == S_PLANE:
				f.leave_plane()
		plane.visible = false
	_update_zone(delta)
	# 玩家操控
	var captured := Input.mouse_mode == Input.MOUSE_MODE_CAPTURED
	var input := Vector2.ZERO
	if Input.is_physical_key_pressed(KEY_W): input.y -= 1
	if Input.is_physical_key_pressed(KEY_S): input.y += 1
	if Input.is_physical_key_pressed(KEY_A): input.x -= 1
	if Input.is_physical_key_pressed(KEY_D): input.x += 1
	input = input.normalized()
	player.c_dir = Basis(Vector3.UP, cam_yaw.rotation.y) * Vector3(input.x, 0, input.y)
	player.c_run = Input.is_physical_key_pressed(KEY_SHIFT)
	player.c_jump = Input.is_physical_key_pressed(KEY_SPACE)
	aiming = captured and Input.is_mouse_button_pressed(MOUSE_BUTTON_RIGHT) and player.alive
	player.c_fire = captured and Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT) and player.alive
	player.c_face_aim = aiming or player.c_fire
	# 准星指向的点（从相机打射线）
	var from := cam.global_position
	var fwd := -cam.global_transform.basis.z
	var hit := ray(from, from + fwd * 20.0, [player.get_rid()])
	player.c_aim_point = hit.position if hit else from + fwd * 20.0
	for l in loots:
		if is_instance_valid(l):
			var v: Node3D = l.get_node("Vis")
			v.rotate_y(delta * 1.5)

func _process(delta: float) -> void:
	if match_root == null or player == null:
		return
	# 相机：跟在玩家（或飞机）身后，撞墙时自动拉近
	var target: Vector3
	var dist := cam_distance
	var side := cam_side
	if player.state == S_PLANE:
		target = plane.global_position
		dist = 2.2
		side = 0.0
	else:
		target = player.model.global_position + Vector3(0, char_scale * 0.85, 0)
	if aiming:
		dist = aim_distance
		side = aim_side
	cam.fov = lerp(cam.fov, aim_fov if aiming else 70.0, clamp(10.0 * delta, 0.0, 1.0))
	cam_yaw.global_position = target
	var want := Vector3(side, 0, dist)
	var world_want := cam_pitch.global_transform * want
	var hit := ray(target, world_want, [], 1)
	if hit:
		want *= max(0.1, target.distance_to(hit.position) - 0.05) / target.distance_to(world_want)
	cam.position = cam.position.lerp(want, clamp(14.0 * delta, 0.0, 1.0))
	# HUD
	hp_bar.value = player.hp
	lbl_alive.text = "存活 %d" % alive_count()
	if player.weapon_id == "":
		lbl_weapon.text = "空手（左键挥拳）"
	elif player.reload_t > 0.0:
		lbl_weapon.text = "%s  换弹中…" % WEAPONS[player.weapon_id].name
	else:
		lbl_weapon.text = "%s  %d / %d" % [WEAPONS[player.weapon_id].name, player.mag, WEAPONS[player.weapon_id].mag]
	if player.state == S_PLANE:
		lbl_hint.text = "按 空格 跳伞"
	elif player.state == S_FALL:
		lbl_hint.text = "WASD 控制降落方向"
	elif player.alive:
		var p := player.global_position
		var out := Vector2(p.x - zone_center.x, p.z - zone_center.z).length() > zone_r
		lbl_hint.text = "你在安全区外！快跑进蓝圈" if out else ""
	else:
		lbl_hint.text = ""
	crosshair.visible = player.alive and player.state == S_GROUND
