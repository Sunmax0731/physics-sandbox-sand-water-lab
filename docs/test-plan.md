# テスト計画

- Repo: `physics-sandbox-sand-water-lab`
- Domain: Game
- Rank: 45 / P2 / Score 57
- Idea No: 4
- アイデア名: 物理サンドボックス・砂水実験
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\Game\physics-sandbox-sand-water-lab`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/physics-sandbox-sand-water-lab-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
