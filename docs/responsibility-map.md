# 責務分割

- Repo: `physics-sandbox-sand-water-lab`
- Domain: Game
- Rank: 45 / P2 / Score 57
- Idea No: 4
- アイデア名: 物理サンドボックス・砂水実験
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

| 領域 | 責務 |
| --- | --- |
| `src/core` | ドメイン判定 |
| `src/validators` | 入力検証 |
| `src/report` | 結果整形 |
| `src/review-model` | QCDS評価 |
| `src/cli` | CLI入口 |
| `app` | UI |
| `src/game` | 境界adapter |
| `src/content` | 境界adapter |

coreはDOM、GitHub、実機に依存させない。adapterは将来の実機、Android、LAN連携を差し替える境界とする。
