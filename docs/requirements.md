# 要件定義

- Repo: `physics-sandbox-sand-water-lab`
- Domain: Game
- Rank: 45 / P2 / Score 57
- Idea No: 4
- アイデア名: 物理サンドボックス・砂水実験
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 背景
積み木、砂、水、流体を触って遊ぶ物理玩具を作る。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 課題
シミュレーションは眺めるだけだと目的が弱い。

## closed alpha要件
- static web playable prototypeとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
