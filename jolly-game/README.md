# 毛绒小队 · 客厅吃鸡 — 文件中转站

Hark 在这里放文件，Muse 自动拉取并安装到游戏项目里。用户不用再手动转发。

## 文件夹

| 文件夹 | 放什么 | Muse 装到哪 |
|---|---|---|
| `root/` | 游戏直接加载的文件：`plush_royale.gd`、飞机/枪/沙发/单人沙发/房间壳 GLB | `D:\muse-work\Jolly-game\jolly\`（项目根目录） |
| `scene/` | 场景家具 GLB（中文名）：卡通沙发、卡通单人沙发、电视柜、电视等 | `D:\muse-work\Jolly-game\场景\` |
| `blender/` | Blender 建模脚本 `.py`（Hark 写的家具代码） | Muse 在电脑上跑，GLB 输出到场景文件夹 |

## 命名规则

- `root/` 里的 GLB 用英文名，游戏脚本按这个名字找文件：
  - 飞机 → `toy_plane.glb`（或 `玩具飞机.glb`）
  - 软弹枪 → `foam_gun.glb`（或 `软弹枪.glb`）
  - 沙发 → `sofa.glb`（或 `沙发.glb`）
  - 单人沙发 → `armchair.glb`（或 `单人沙发.glb`）
  - 房间壳 → `room_shell.glb`（或 `房间.glb`）
  - 游戏脚本 → `plush_royale.gd`
- `scene/` 里的 GLB 用中文名，如 `卡通沙发.glb`、`卡通电视柜.glb`。
- 每次改一个文件就直接覆盖同名文件上传，不用改名加版本号。Muse 拉取时按文件名替换旧版，旧版会先备份。

## 怎么上传（Hark）

在 GitHub 网页打开这个文件夹，点 **Add file → Upload files**，把文件拖进来，写一句改了什么，点 **Commit changes** 就行。GLB 是二进制文件，网页上传没问题。
