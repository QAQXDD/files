---
name: paper-satire-short
description: 纸艺无对白讽刺短片（paper-craft no-dialogue dark-humour satire shorts）。把用户的原创剧本做成 9:16、35–65 秒、纯画面无台词的黑色幽默短片，讽刺职场/社会现象；用 three.js 做纸艺立体布景（纸材质、铅笔排线、墨线、真实投影、暖光、bloom、移轴、颗粒），交付一个可离线播放的单文件 HTML，内置「导出 MP4」（WebCodecs H.264 + AAC）。Use when the user asks for a paper-craft / 纸艺 / 立体书风格的讽刺短片、抖音短剧动画、或给出这类剧本要求做成片。
---

# 纸艺无对白讽刺短片（paper-satire-short）

标杆：《甩锅乒乓球》（Blame Pong）。最新、最好的参考成片：`examples/bichibang.html`《必吃榜》（打开即可播放，`?test=1` + `window.__seek(t)` 可逐帧对照）。
起步工程：`template/`（能直接 build、播放、截帧、导出 MP4 的最小示例，**不是**任何一集的剧情）。

---

## 1. 用途

把用户的原创剧本做成**纯画面、无台词**的黑色幽默短片，讽刺职场或社会现象（事不关己、层层甩锅、网红税、学历贬值、房贷……），全程黑色幽默演出，结尾用反转或定格收住包袱，最后观众才恍然大悟。

## 2. 硬规则（不可违反）

1. **只借纸艺渲染质感**：纸材质、铅笔排线、墨线描边、真实投影、暖光、bloom（threshold 1.05）、移轴（tilt-shift）、颗粒。
2. **场景和人物每集全部新做**：不套旧道具、旧配色、旧镜头套路。`template/` 里的房间、两个人物、纸团都只是演示，正式一集里一律替换。
3. **节拍严格按用户原文**：不加戏、不删拍、不调换顺序。只有用户明确说“可以自由改编 / 只是方向”时才可以加递进、插入镜头或调整顺序——改了什么要在交付时逐条说明。
4. **无旁白、无台词、无字幕**：画面里只留剧情必需的**道具字**（招牌、价签、屏幕、工牌）。不要片名卡开场。
5. **开场 2 秒必须动态、有钩子**（抖音完播率）：第 0 帧就有东西在动、镜头在走；片名只出现在封面和文案里。
6. **结尾定格 ≤ 约 8 秒**；结尾**循环接回开头**（镜头回到第 0 帧机位）很受欢迎，能做就做。
7. **交付只有一个 HTML**：three.js、字体、音频全部内嵌，可离线打开；自带播放/重播按钮和「导出 MP4」。不交付 MP4 文件（用户在自己电脑上导出）。

## 3. 规格

| 项 | 规格 |
|---|---|
| 画幅 | 9:16，1080×1920（cover 另出原生 4:3 1440×1080） |
| 时长 | 约 35–65 s，以剧本需要为准，不必卡死 60 s |
| 渲染 | three.js（0.170），WebGL2，`preserveDrawingBuffer: true`，PCFSoft 阴影，HalfFloat 渲染目标 + 4×MSAA |
| 后期 | UnrealBloom（strength 0.7, radius 0.5, **threshold 1.05**：只有亮度 >1 的霓虹/窗光会发光）→ 自定义 ShaderPass：移轴模糊、纸纹叠加、暗角、暖色偏移、12 fps 变化的颗粒、闪白、甩镜拖影 |
| 时钟 | **画面跟音频时钟走**（`AudioContext.currentTime`），不是 `requestAnimationFrame` 计数 |
| 确定性 | `render(t)` 只依赖 t：不用 `Math.random()`，用 seeded `rnd()` 或 `hsh(a,b)`；不累积跨帧状态 |
| 测试接口 | `window.__seek(t)`、`window.__frame(t, type, q)`（返回 dataURL）、`window.__duration`、`window.__ready`；`?test=1` 隐藏所有 UI；`?from=秒` 从某秒开始播；`?w=&h=` 改渲染尺寸（封面） |
| 音频 | 响度约 **-14 LUFS**（integrated），**true peak ≤ -1 dBTP**（母带限幅到 -2.0 dBTP，因为 MP3 编码会多出约 0.7 dB 的样间峰值；master.py 会试编一遍 MP3 报告实际值），48 kHz，内嵌 192k MP3 |
| 导出 MP4 | WebCodecs H.264（High→Main→Baseline→VP9 回退）+ AAC 48 kHz（无 AAC 时 Opus），mp4-muxer 内联；分辨率 1080/1440/4K，30/60 fps；画质 标准 / 高（2× 超采样、4096 阴影、各向异性过滤）/ 极高（2× 超采样、8× MSAA）；逐帧离线渲染，不掉帧 |

## 4. 工作流程（一步一步）

### Step 0 · 环境
见第 8 节。先确认 `npm install`、`python3 build.py`、`python3 render.py 0` 在模板上能跑通，再开新集。

### Step 1 · 读剧本，拆节拍
- 把用户原文逐句拆成节拍（beat），一句一个或几个可拍的动作。**不加不删**；不清楚的地方问用户，不要自己补。
- 标出：钩子（前 2 秒放什么）、包袱（哪一拍是反转）、结尾定格画面、能否循环。
- 预估时长：动作拍 0.3–1.5 s，揭示拍 1–3 s，定格 ≤ 8 s。

### Step 2 · 先找一个“空间装置”把所有拍子串起来（最重要）
一个布景结构让所有节拍在同一个空间里连续发生，镜头只需要跟着一个物体走：
- 甩锅：**剖面金字塔大楼**，楼层之间是开口朝镜头的**半管纸滑道**，“锅/雷”一路往下滚，镜头跟着道具上下摇。层级 = 楼层，一眼看懂。
- 必吃榜：**一条笔直的长队**，镜头沿队伍横移：队尾 → 柜台 → 飞回 → 队尾，形成闭环（循环结尾）。
- 对方正在输入中：**竖立的巨型手机把圆形底座劈成两半**，前面是他、背后是她，镜头绕一圈就是真相揭示。
- 文凭千层饼：剖面房间 + 落地墙当**刻度尺**，每人一摞砖（文凭）越叠越高。
找不到装置时宁可多想，不要做成一串互不相干的场景切换（第 2 集的教训：点子太多、观众看不懂）。

### Step 3 · 写 `timeline.py` 节拍表
- 每一拍是一个有名字的时间（秒）：`SLAP=12.35, LAND=16.0 ...`。生成 `timeline.json`，**画面（main.js）和声音（audio.py）共用同一份**，任何时间都不要在别处写死。
- 递进序列在这里算：例如乒乓 40 拍间隔 0.95 → 0.21 s；`t += iv; iv = max(min_iv, iv * 0.86)`。飞行时间等派生量如果音画都要用，公式两边保持一致（模板里 `fl = min(iv, 0.62) * 0.82`）。

### Step 4 · 布景与人物（`set.js`、`chars.js`）
- 单位用米；所有表面是 `paperTex()` 画出来的纸（纤维 + 颗粒），实体用 `box()/inked()` 自带墨线；切开的断面用 `corrugTex()` 露出瓦楞纸。
- 平面道具/人物用 `cutout()`：带 alpha 的卡片，`customDepthMaterial` 让投影是**剪纸的形状**。
- 会动的道具做成**铰链卡片**（立体书翻页式 / 拉丝带弹出），从地面或书页里翻起来——**道具不能凭空出现**。
- 人物：**厚纸板身体，头和手臂是分开的卡片**，挂在层级 pivot 上：`root > tilt > hip > lean > arms / neck > head`，腿单独两片。脸用墨线画在 canvas 上，**表情可换**（眼睛 bean/happy/closed/squint/heart/x/stare/wide…、视线 look、嘴 smile/grin/stiff/O/wobble/shout…、眉毛角度、腮红、汗滴数量、眼泪、黑炭 soot），每种表情纹理缓存一次。
- **一层一种身份**，靠道具和外形一眼认出：梆形老板 + 小胡子 + 红酒；实习生个子小、挂工牌；网红打卡客渔夫帽 + 手机。每个角色一个独特剪影 + 一个标志道具。
- 配色每集重新定（一个强调色贯穿，例如水用蓝 #3a7fc1），其他保持纸色。

### Step 5 · 动作与镜头（`main.js`）
- 每个角色写成 `setX(t)`：先 `pose()` 复位，再按节拍区间设置旋转/位置/表情，全部是 t 的纯函数；用 `ramp / sm / ease / easeOutBack / pchip` 做插值。
- **动作前先蓄力**（anticipation）：巴掌先上扬、手臂先往后抡，再快速出手；出手后有跟随（follow-through）和落地回弹。
- **节奏越来越急**，人物越打越冒汗（汗滴数随拍数增加）。
- **递进式重复**：同一个动作重复，每次更大/更快/更多人（必吃榜：飞过头顶的人越来越密，最后远景喷泉）。
- 镜头：`camAt(t)` 返回 `{pos, look, fov}`；跟着那个贯穿全片的物体走（滞后一点更自然）；冲击帧加衰减抖动；甩镜用 `uSmear`；主光（SpotLight）跟随镜头的 look 点，保证投影在画面里方向一致。
- 群戏时**主角不能出画**；群戏楼层/人群在画面里**不能太小**（9:16 竖幅很窄，宁可拉近、分两拍拍）。
- 结尾：物体**落点要准**（落在两眼之间、正中锅底），然后定格，镜头慢慢回到开场机位（循环）。

### Step 6 · 声音（`fetch_commons.py` → `audio.py` → `master.py`）
- **优先真录音**：Wikimedia Commons 上 **CC0 / Public Domain** 的录音（`python3 fetch_commons.py --search "door slam"` 列候选，`python3 fetch_commons.py "File:xxx.ogg" name` 只接受 CC0/PD，自动转 48 kHz 并记到 `sfx/CREDITS.md`）。找不到再用 numpy 合成（模板里有一套：tick、paper_pap、crinkle、whoosh、thud、ding、metal_ring、pluck、bass、kick、hat、reverb、trombone_note、sad_trombone）。
- **一条声音线贯穿全片**（引线滋滋声、时钟滴答、“正在输入”气泡音……），在**包袱处突然打断，背景乐一起停**（`cut_after(t)`）。关键时刻静音更有力。
- 每个看得见的撞击都在**同一帧**有声音；蓄力配上升音；结尾：落点 → **金属回声** → 静默里一段**悲伤长号**（wah-wah-wah-waaah）。
- `master.py`：迭代 4 次（响度归一到 -14 LUFS → 4× 过采样前视限幅到 -2.0 dBTP），打印 WAV 和试编 MP3 的 LUFS / true peak；以**嵌入的 MP3** ≤ -1 dBTP 为准。

### Step 7 · 构建（`build.py`）
`timeline.py` → esbuild 打包（`three` 和 `three/addons` 别名到 node_modules，`.json` loader）→ 字体 woff2、音频 MP3、JS 全部 base64 内嵌进 `shell.html` → `out/<slug>.html`。`project.json` 里改 slug（文件名 + MP4 名）、title、lang（zh-CN / en）、font。

### Step 8 · 自检（交付前必须做）
1. **逐秒接触表**：`python3 render.py --every 1 && python3 sheet.py sheet_sec.jpg`，看完整张。
2. **快动作 0.1 s 接触表**：`OUT=fast python3 render.py --range 8 10.5 0.1 && python3 sheet.py sheet_fast.jpg "fast/s_*.jpg" 9 180`，每个撞击/投掷/落点都要过一遍。
3. 检查清单（第 6 节）逐条过：节拍时间、主角是否在画、物体落点、黑屏（render.py 会报 BLACK/DARK frames）、控制台报错（render.py 会打印）、招牌/字是否被镜头切掉。
4. **390×844 手机试播**：`PHASE=play python3 playtest.py`（画布是否完整缩放进屏幕、点击播放、音频时钟 t 是否和 wall clock 同步走）+ `PHASE=end python3 playtest.py`（结尾出现重播按钮、点了从 0 重播）。
5. 导出抽查：在桌面 Chrome / Edge 打开 HTML，点「导出 MP4」导 1080p 标准画质，确认有声音、音画同步。

### Step 9 · 封面（`cover.py`）
- 挑包袱最清楚的一帧（道具 + 受害者 + 层级关系同框），不要挑像片名卡的一帧。
- **原生渲染**每个画幅：9:16 1080×1920 和 4:3 1440×1080，用 `?w=&h=` + `window.__camOv`（重新构图）+ `window.__postOv`（移轴减弱），**不要**把 9:16 放在模糊背景上凑 4:3。
- 片名做成纸艺剪字（墨线 → 奶油纸边 → 墨线 → 彩色字）+ 红色纸条副标题，带软投影；看一下 200 px 缩略图是否还读得出来。

### Step 10 · 文案（抖音 / 小红书 / YouTube / TikTok）
- 抖音：标题 ≤ 20 字、带一个反问或“破防”钩子，不剧透包袱；3–5 个话题标签（#职场 #打工人 #黑色幽默 #纸艺动画 + 题材词）。
- 小红书：标题 + emoji 分段正文（2–4 行，讲“你有没有这种经历”），结尾求评论，5–8 个标签。
- YouTube（EN）：Title（≤ 70 chars, curiosity, no spoiler）+ description（one-line premise, "No dialogue. Paper-craft 3D animation.", hashtags #Shorts #satire #animation）。
- TikTok（EN）：一句钩子 + 3–5 hashtags。
- 中英片名提前定好（例：甩锅乒乓球 = Blame Pong；必吃榜 = Must-Eat List）。

### Step 11 · 英文版（EN localisation）
- **画面和声音完全不变**，只换道具字：复制工程，把所有道具字（招牌、价签、徽章、屏幕字）译成短而有冲击力的英文，`project.json` 改 `lang: "en"`、`slug`、`font: "fonts/title_en.woff2"`（Luckiest Guy，`python3 fonts/make_font.py en`）。
- 英文通常更长：检查每块招牌是否溢出、是否被镜头切掉；必要时缩字号或拆两行，不要改镜头。
- 音频直接复用中文版的 `out/_embed.mp3`（逐字节相同，音画同步不变）。
- `exporter.js` 根据 `<html lang>` 自动切换导出面板的中英文。

## 5. 让片子成立的做法（用户验证过的经验）

1. **先找一个空间装置把所有拍子串起来**：甩锅用剖面金字塔大楼 + 半管纸滑道，镜头跟道具上下摇。
2. **节奏越来越急**：乒乓 40 拍，间隔 0.95 → 0.21 s，人物越打越冒汗。
3. **一条声音线贯穿全片**（引线滋滋声），在包袱处突然打断，背景乐同停。
4. **一层一种身份**，靠道具和外形一眼认出（梆形老板 + 小胡子 + 红酒；实习生个子小挂工牌）。
5. **结尾物体落点准**，接金属回声和悲伤长号。
6. **道具不能凭空出现**：用翻书式 / 拉丝带弹出。
7. **动作前先蓄力**：巴掌先上扬。
8. **关键时刻静音更有力**。
9. **递进式重复**。
10. **开场 2 秒动态有钩子，不放片名卡**；**结尾循环接回开头**很受欢迎；**结尾定格 ≤ 约 8 秒**。
11. 一个点子讲透比塞很多点子强：观众不知道剧本也要看得懂（层级 = 楼层、双关变成物理动作）。

## 6. 坑位清单（交付前逐条打勾）

- [ ] 群戏时**主角出画**了吗？
- [ ] 群戏所在楼层/人群在画面里**太小**了吗？
- [ ] 有没有道具**凭空出现**？
- [ ] 每个动作前有**蓄力**吗？
- [ ] 结尾定格是否 **> 8 秒**？
- [ ] **烟/火/爆炸的颜色**对吗（黑炭烟是灰黑，不是彩色；纸屑血是红纸片）？
- [ ] **黑屏** / 全黑帧 / **控制台报错**？
- [ ] **招牌、道具字被镜头切掉**？（尤其英文版）
- [ ] 开场 2 秒有没有放了**片名卡**或静止画面？
- [ ] 贯穿声音线在包袱处**真的断了**吗？背景乐一起停了吗？
- [ ] 响度 -14 LUFS ±0.5、true peak ≤ -1 dBTP？
- [ ] 手机 390×844：画面完整、点击能播、重播按钮出现？
- [ ] `render(t)` 是否确定性（同一个 t 截两次一模一样）？有没有用 `Math.random()`？
- [ ] 节拍是否和用户原文一一对应（没加戏、没删拍）？

## 7. 工程结构（template/）

| 文件 | 作用 |
|---|---|
| `project.json` | slug / title / lang / font / bg |
| `timeline.py` → `timeline.json` | 节拍表，画面和声音共用 |
| `lib.js` | 纸艺渲染工具：纸纹 `paperTex`、铅笔排线着色器 `hatchify/paperMat`（按屏幕像素画排线，导出 4K 时 `HATCH.uScale` 保持线距）、墨线 `inked/box`、剪纸 `cutout`（形状投影）、瓦楞断面 `corrugTex`、发光 `glow`、缓动函数、seeded `rnd` |
| `chars.js` | 表情绘制 `drawFace`（所有眼/嘴/眉/汗/泪/黑炭）、通用人物骨架 `rig(spec)`、示例人物 makeA / makeB |
| `set.js` | 示例布景（剖面纸房间、窗、钟、道具字招牌、立体书式弹出垃圾桶） |
| `main.js` | 场景、灯光、后期链、角色动作、镜头、`setQuality`（导出画质开关）；封面钩子 `?w=&h=`、`__camOv`、`__postOv` |
| `app.js` | 播放外壳：点击带声播放、音频时钟驱动、重播、测试钩子 |
| `exporter.js` | 页内「导出 MP4」（WebCodecs + mp4-muxer） |
| `shell.html` | 单文件 HTML 模板（字体/音频/JS 占位符） |
| `audio.py` / `master.py` | 音效排轨 + 合成库；响度标准化与真峰值限幅 |
| `fetch_commons.py` | 只下载 CC0/PD 的 Wikimedia Commons 录音并记来源 |
| `build.py` | 打包成单文件 HTML |
| `render.py` / `sheet.py` | 确定性截帧（含黑帧检测、控制台报错）/ 接触表 |
| `playtest.py` | 390×844 手机试播（播放、音频时钟、重播） |
| `cover.py` + `covers.json` | 原生多画幅封面 + 纸艺标题 |
| `fonts/make_font.py` | 下载并子集化标题字体（ZCOOL KuaiLe OFL / Luckiest Guy Apache-2.0）|

## 8. 环境搭建

```bash
# Node 18+（用于 esbuild 打包；运行时只需要浏览器）
cd template && npm install                    # three 0.170.0, mp4-muxer 5.2.2, esbuild 0.24.0
# Python 3.10+
pip install numpy scipy soundfile pyloudnorm Pillow playwright fonttools brotli
python3 -m playwright install chromium        # Linux 无头机器缺系统库时：python3 -m playwright install-deps chromium（或 apt 装 libatk1.0-0 libxcomposite1 libxdamage1 libatspi2.0-0 libgbm1 libnss3 libxkbcommon0）
# ffmpeg（音频转 MP3 嵌入、Commons 录音转码）
```

- **无头 Chromium 跑 WebGL**：启动参数 `--use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist`（`_common.py` 里已配置；无 GPU 时走 SwiftShader 软件渲染）。
- **确定性截帧只用 `?test=1` + `window.__seek(t)` / `__frame(t)`**。实时播放时截图会超时（软件 WebGL 下尤其严重），playtest 只读 `window.__t` 数值、分阶段跑。
- 软件渲染很慢（1080×1920 一帧 1–3 s）：长渲染**分段跑**，render.py 自动跳过已存在的帧，可以反复调用直到渲完；单条命令控制在 2 分钟以内。
- 导出 MP4 需要桌面版 Chrome / Edge（WebCodecs）。无头 Chromium 里通常只有 Opus 没有 AAC，导出面板会自动回退并提示。

## 9. 交付物

1. **单个 HTML**：`out/<slug>.html`（中文）和英文版 `out/<slug_en>.html`。离线可播；点击播放带声；结尾重播；右上角「导出 MP4」（仅在播放按钮显示时出现，不会挡住画面，也不会被录进视频）。
2. **封面**：9:16（1080×1920）+ **原生** 4:3（1440×1080，不是模糊两侧），中英各一套。
3. **文案**：抖音、小红书（中文）；YouTube、TikTok（英文）。
4. 交付说明里列出：时长、节拍对照、对原剧本做了哪些改编（如有授权）、音效来源（CREDITS）。

## 10. 快速开始

```bash
cd template
npm install
pip install numpy scipy soundfile pyloudnorm Pillow playwright fonttools brotli && python3 -m playwright install chromium
python3 audio.py && python3 master.py          # 声音 -> out/<slug>_audio.wav
python3 build.py                               # -> out/<slug>.html（双击打开即可看）
python3 render.py --every 1 && python3 sheet.py sheet_sec.jpg   # 自检接触表
```
新一集：复制 `template/` → 改 `project.json` → 重写 `timeline.py`、`set.js`、`chars.js` 的角色、`main.js` 的 setCast / camAt、`audio.py` 的 placement 段 → 重复 Step 7–11。
