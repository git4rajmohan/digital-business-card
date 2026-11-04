# digital-business-card

日本語デジタル名刺（Seevaram Rajmohan — AI評価エンジニア／QAリード）のGitHub Pagesサイト。

**サイトURL:** https://git4rajmohan.github.io/digital-business-card/

## ファイル構成

```
digital-business-card/
├── index.html   # 名刺本体（HTML/CSS/JavaScriptを1ファイルに完結）
├── README.md
└── .nojekyll
```

- LinkedInのQRコードはBase64で埋め込み済み。外部依存なし。
- 「連絡先を保存（VCF）」ボタンで、ブラウザが vCard 3.0 の `.vcf` ファイルを生成・ダウンロードします（個別の .vcf ファイルは不要）。

## 連絡先情報の更新方法

`index.html` 内の `EDIT THESE CONTACT DETAILS` コメント欄（`CONTACT` オブジェクト）の
`email` と `phone` を編集して `main` ブランチにコミットしてください。
GitHub Pagesが約1分後に自動再デプロイします。表示リンクとVCF内容は両方この値から生成されます。

## 共有方法

公開URLをそのまま共有してください（ローカルのHTMLファイル添付ではなく） —
WhatsApp・メール・TeamsなどにURLを貼ると、プレビュー内のリンクもすべて機能します。