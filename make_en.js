// ponytail: en.html is generated from index.html via literal substitutions so
// the Base64 QR stays byte-identical. Re-run `node make_en.js` whenever
// index.html changes; edit both CONTACTs to keep values identical.
const fs = require("fs");
const src = fs.readFileSync("index.html", "utf8");
const R = [
  ['<!DOCTYPE html>\r\n<html lang="ja">', '<!DOCTYPE html>\r\n<html lang="en">'],
  ['<meta name="description" content="Seevaram Rajmohanのデジタル名刺。LinkedIn、GitHub、連絡先情報。AI評価エンジニア／QAリード。">', '<meta name="description" content="Digital business card of Seevaram Rajmohan. LinkedIn, GitHub, contact details. AI Evaluation Engineer / QA Lead.">'],
  ['<title>Seevaram Rajmohan | デジタル名刺</title>', '<title>Seevaram Rajmohan | Digital Business Card</title>'],
  ['<meta property="og:title" content="Seevaram Rajmohan | デジタル名刺">', '<meta property="og:title" content="Seevaram Rajmohan | Digital Business Card">'],
  ['<meta property="og:description" content="AI評価エンジニア｜QAリード。LinkedIn、GitHub、連絡先情報、VCFダウンロード。">', '<meta property="og:description" content="AI Evaluation Engineer | QA Lead. LinkedIn, GitHub, contact details, VCF share.">'],
  ['<meta property="og:url" content="https://git4rajmohan.github.io/digital-business-card/">', '<meta property="og:url" content="https://git4rajmohan.github.io/digital-business-card/en.html">'],
  ['<meta property="og:locale" content="ja_JP">', '<meta property="og:locale" content="en_US">'],
  ['<meta name="twitter:title" content="Seevaram Rajmohan | デジタル名刺">', '<meta name="twitter:title" content="Seevaram Rajmohan | Digital Business Card">'],
  ['<meta name="twitter:description" content="AI評価エンジニア｜QAリード。LinkedIn、GitHub、連絡先情報。">', '<meta name="twitter:description" content="AI Evaluation Engineer | QA Lead. LinkedIn, GitHub, contact details.">'],
  ['<a href="./index.html" aria-current="page" lang="ja">日本語</a>', '<a href="./index.html" lang="ja">日本語</a>'],
  ['<a href="./en.html" lang="en">English</a>', '<a href="./en.html" aria-current="page" lang="en">English</a>'],
  ['<nav class="lang" aria-label="言語 / Language">', '<nav class="lang" aria-label="Language / 言語">'],
  ['<h1>セーヴァラーム・ラージモハン</h1>', '<h1>Seevaram Rajmohan</h1>'],
  ['<div class="en-name">Seevaram Rajmohan</div>', '<div class="en-name">セーヴァラーム・ラージモハン</div>'],
  ['<div class="role">AI評価エンジニア｜QAリード</div>', '<div class="role">AI Evaluation Engineer | QA Lead</div>'],
  ['<div class="tagline">RAG・Agentic AI評価・ナレッジグラフ・AIガードレール・テスト自動化</div>', '<div class="tagline">RAG &amp; Agentic AI Evaluation · Knowledge Graphs · AI Guardrails · Test Automation</div>'],
  ['<h2>プロフィール・専門分野</h2>', '<h2>Profile &amp; Expertise</h2>'],
  ['IT業界で20年以上の経験。エンタープライズ製品の品質保証、AI評価、RAGAS、LLMテスト、Python、LangChain、LangGraph、Selenium、Playwright、AI支援型テスト自動化に取り組んでいます。', '20+ years of IT experience in software quality engineering, test automation, and enterprise product verification, with additional industrial experience. Focused on AI evaluation, RAGAS, LLM testing, Python, LangChain, LangGraph, Selenium, Playwright, and AI-assisted test automation.'],
  ['<h2>オンラインプロフィール</h2>', '<h2>Online Profiles</h2>'],
  ['<span>LinkedIn プロフィール</span>', '<span>LinkedIn profile</span>'],
  ['<span>GitHub — AIプロジェクト一覧</span>', '<span>GitHub — AI project portfolio</span>'],
  ['<h2>連絡先</h2>', '<h2>Contact</h2>'],
  ['<h2>QRコード</h2>', '<h2>QR Code</h2>'],
  ['alt="LinkedInプロフィールのQRコード"', 'alt="QR code linking to the LinkedIn profile of Seevaram Rajmohan"'],
  ['<strong>LinkedInプロフィール</strong>', '<strong>LinkedIn profile</strong>'],
  ['QRコードをスマートフォンで読み取ると、LinkedInプロフィールを開けます。', 'Scan this QR code with your phone to open the LinkedIn profile.'],
  ['>LinkedInを見る</a>', '>View LinkedIn</a>'],
  ['>連絡先を共有・保存（VCF）</button>', '>Share / Save Contact (VCF)</button>'],
  ['<p class="vcf-note">iPhoneの場合：共有メニューから「メッセージ」「メール」または「ファイルに保存」を選択してください。受信したVCFファイルを開き、「連絡先に追加」を選択してください。</p>', '<p class="vcf-note">On iPhone, choose Messages, Mail, or Save to Files from the Share Sheet. Open the received VCF file and select Add to Contacts.</p>'],
  ['"共有に失敗しました。もう一度お試しください。"', '"Sharing failed. Please try again."'],
  ['"VCFファイル（" + CONTACT.fileName + "）をダウンロードしました。"', 'CONTACT.fileName + " has been downloaded. Open it with your Contacts app."'],
  ['"TITLE:" + escVcf("AI評価エンジニア｜QAリード")', '"TITLE:" + escVcf("AI Evaluation Engineer | QA Lead")'],
  ['"NOTE:" + escVcf("IT業界で20年以上の経験。AI評価、RAG、Agentic AI、エンタープライズQA。")', '"NOTE:" + escVcf("20+ years of IT experience. AI evaluation, RAG, Agentic AI, enterprise QA.")'],
];
let out = src, n = 0;
for (const [a, b] of R) {
  if (!out.includes(a)) { console.error("NOT FOUND: " + a.slice(0, 60)); process.exit(1); }
  out = out.split(a).join(b); n++;
}
fs.writeFileSync("en.html", out, "utf8");
console.log("en.html written, " + n + " substitutions");