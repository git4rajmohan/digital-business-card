// parity + VCF logic check for en.html and index.html
const fs = require("fs");
const en = fs.readFileSync("en.html", "utf8"), jp = fs.readFileSync("index.html", "utf8");
const qrOf = (s) => (s.match(/data:image\/png;base64,[A-Za-z0-9+/=]+/) || ["x"])[0];
const contactOf = (s) => ({
  email: (s.match(/email: "([^"]+)"/) || [])[1],
  phone: (s.match(/phone: "([^"]+)"/) || [])[1],
});
const checks = {
  "lang=en": en.startsWith('<!DOCTYPE html>\r\n<html lang="en">'),
  "same QR base64": qrOf(en) === qrOf(jp),
  "same CONTACT email": contactOf(en).email === contactOf(jp).email,
  "same CONTACT phone": contactOf(en).phone === contactOf(jp).phone,
  "same LinkedIn": en.includes("linkedin.com/in/seevaram-rajmohan-04a4a04a/"),
  "same GitHub": en.includes("github.com/git4rajmohan/AI_Projects"),
  "og:url en.html": en.includes('og:url" content="https://git4rajmohan.github.io/digital-business-card/en.html"'),
  "switch->index (no current)": en.includes('<a href="./index.html" lang="ja">'),
  "aria-current on en": en.includes('<a href="./en.html" aria-current="page" lang="en">'),
  "EN hero name": en.includes("<h1>Seevaram Rajmohan</h1>"),
  "EN role": en.includes("AI Evaluation Engineer | QA Lead"),
  "FN English in en": en.includes('"FN:" + escVcf("Seevaram Rajmohan")'),
  "NICKNAME JP in en": en.includes('"NICKNAME:" + escVcf("シーバラム・ラージモハン")'),
  "TITLE EN in en vcard": en.includes('"TITLE:" + escVcf("AI Evaluation Engineer | QA Lead")'),
  "foldVcf both": en.includes("foldVcf") && jp.includes("foldVcf"),
  "canShare both": en.includes("navigator.canShare({ files: [vcardFile] })") && jp.includes("navigator.canShare({ files: [vcardFile] })"),
  "no BOM": !en.includes("﻿"),
};
let fail = 0;
for (const [k, v] of Object.entries(checks)) { if (v !== true) fail++; console.log((v ? "OK   " : "FAIL ") + k); }
// run the shared VCF generator logic (mirrors the page source)
const escVcf = (s) => String(s).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
const foldVcf = (line) => {
  if (Buffer.byteLength(line, "utf8") <= 75) return line;
  const out = []; let cur = "", len = 0;
  for (const ch of line) {
    const cp = ch.codePointAt(0), b = cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
    if (len + b > 75) { out.push(cur); cur = " " + ch; len = 1 + b; } else { cur += ch; len += b; }
  }
  out.push(cur); return out.join("\r\n");
};
const C = contactOf(en);
for (const [page, title] of [["en", "AI Evaluation Engineer | QA Lead"], ["jp", "AI評価エンジニア｜QAリード"]]) {
  const v = ["BEGIN:VCARD", "VERSION:3.0", "N:Rajmohan;Seevaram;;;", "FN:" + escVcf("Seevaram Rajmohan"),
    "NICKNAME:" + escVcf("シーバラム・ラージモハン"), "TITLE:" + escVcf(title),
    "EMAIL;TYPE=INTERNET:" + escVcf(C.email), "TEL;TYPE=CELL:" + escVcf(C.phone),
    "URL:https://www.linkedin.com/in/seevaram-rajmohan-04a4a04a/", "URL:https://github.com/git4rajmohan/AI_Projects",
    "END:VCARD"].map(foldVcf).join("\r\n") + "\r\n";
  const okFold = v.split("\r\n").every((l) => Buffer.byteLength(l, "utf8") <= 75);
  const okEsc = !v.includes(" | ") || title.includes("|") ? v.includes("\\|") === false && v.match(/TITLE:[^\r]*[;,]/) === null : true;
  if (!okFold) { fail++; console.log("FAIL  fold>75 in " + page); }
  if (!v.endsWith("\r\n") || v.includes("﻿")) { fail++; console.log("FAIL  CRLF/BOM " + page); }
  console.log("OK    vcard " + page + " (" + Buffer.byteLength(v, "utf8") + " bytes)");
}
console.log(fail === 0 ? "ALL CHECKS PASS" : fail + " FAILURES");
process.exit(fail === 0 ? 0 : 1);