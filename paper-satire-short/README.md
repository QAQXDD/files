# paper-satire-short — portable agent skill

纸艺无对白讽刺短片：给任何 AI coding agent（Claude Code、Codex、Cursor……）用的技能包。

- `SKILL.md` — 技能说明（YAML front matter + 规则、流程、经验、坑位、环境、交付物）。Agent 先读它。
- `template/` — 可直接构建的起步工程（示例场景，不是任何一集）。快速开始见 `template/README.md`。
- `examples/bichibang.html` — 成片质量参考《必吃榜》（离线打开即可播放 / 导出 MP4）。
- `examples/scripts.md` — 示例剧情梗概与改编笔记。

Claude Code: put this folder in `~/.claude/skills/paper-satire-short/` (or `.claude/skills/` in a project).
Other agents: point the agent at `SKILL.md` and let it copy `template/` for each new film.
