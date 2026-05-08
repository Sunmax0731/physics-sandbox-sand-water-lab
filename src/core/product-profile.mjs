export const productProfile = {
  "repo": "physics-sandbox-sand-water-lab",
  "title": "物理サンドボックス・砂水実験",
  "domain": "Game",
  "version": "0.1.0-alpha.1",
  "rank": 45,
  "tier": "P2",
  "score": 57,
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "積み木、砂、水、流体を触って遊ぶ物理玩具を作る。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "シミュレーションは眺めるだけだと目的が弱い。",
  "differentiation": "小さな課題や比較モードを入れて遊びと実験を両立する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/game",
    "src/content"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "GitHub Pages向け静的Webとして外部API、課金、ランキング送信、ユーザー投稿公開をclosed alphaでは扱わない。",
    "レベルや課題データはsamples配下に閉じ、素材は自作の軽量SVGだけを同梱する。",
    "BOOTH配布前に著作権、年齢表現、保存データの説明を確認する。"
  ]
};
