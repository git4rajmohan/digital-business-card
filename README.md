# digital-business-card

日英バイリンガルのデジタル名刺（Seevaram Rajmohan — AI評価エンジニア／QAリード）のGitHub Pagesサイト。

**日本語:** https://git4rajmohan.github.io/digital-business-card/
**English:** https://git4rajmohan.github.io/digital-business-card/en.html

## ファイル構成

```
digital-business-card/
├── index.html   # 日本語ページ（HTML/CSS/JavaScriptを1ファイルに完結）
├── en.html      # 英語ページ
├── README.md
├── .nojekyll
└── make_en.js   # en.html 生成スクリプト（開発用。サイトには不要）
```

- LinkedInのQRコードは両ページにBase64で埋め込み済み。外部依存なし。
- 各ページ上部に言語切替（日本語 / English）あり。JavaScript不要のリンク方式です。

## 連絡先情報の更新方法（両ページ）

`index.html` と `en.html` の両方にある `EDIT THESE CONTACT DETAILS` コメント欄の
`CONTACT` オブジェクトの `email` と `phone` を、**同じ値**に編集して `main` ブランチにコミットしてください。
表示リンクと生成されるVCFは両ページともこの値から作られます。GitHub Pagesは約1分で自動再デプロイします。

⚠️ **プライバシー注意：** このサイトは公開リポジトリ・公開URLです。実連絡先を入れると世界中から閲覧可能になります。

## 共有方法

公開URLをそのまま共有してください（ローカルのHTMLファイル添付ではなく） —
WhatsApp・メール・TeamsなどにURLを貼ると、プレビュー内のリンクもすべて機能します。

## VCFボタンの動作

1. **iPhone Safari:** ネイティブ共有シートが開き、VCFファイルを メッセージ／メール／AirDrop／ファイルに保存 に送れます。
   受信・保存したVCFファイルをタップすると「連絡先に追加」が選べます。
   共有シートは「送る先」を選ぶ画面です。自分の連絡先に追加するには、自分に送るか「ファイルに保存」してからファイルを開きます。
2. **Android / Windows / その他:** `Seevaram_Rajmohan.vcf` が直接ダウンロードされます。

VCFは vCard 3.0（UTF-8・CRLF・75バイト折返し）をブラウザ内で生成します。リポジトリに .vcf ファイルはありません。

## ローカルテスト

`index.html`（または `en.html`）をブラウザで開くだけ。サーバー不要です。
`index.html` 変更後は `node make_en.js` で en.html を再生成し、`node check_cards.js` で両ページの一致性を確認できます。

## デプロイ

`main` ブランチにプッシュすると、GitHub Pages（Settings → Pages → Deploy from a branch / `main` / `/ (root)`）が自動で再ビルドします。