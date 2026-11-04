// Verify both pages have the same fixed share block and valid inline JS.
const fs = require("fs");
const jp = fs.readFileSync("index.html", "utf8"), en = fs.readFileSync("en.html", "utf8");
for (const [f, s] of [["index.html", jp], ["en.html", en]]) {
  const script = s.match(/<script>([\s\S]*?)<\/script>/)[1];
  new Function(script);
  console.log(f + " JS syntax OK");
}
const block = (s) => s.match(/\/\/ iPhone Safari \(and Windows share flyout\)[\s\S]*?^  \}/m)[0];
const same = block(jp) === block(en);
console.log("share blocks identical: " + same);
if (!same) { console.log("JP:\n" + block(jp) + "\nEN:\n" + block(en)); process.exit(1); }
console.log("EN fallback status text present: " + en.includes("has been downloaded"));