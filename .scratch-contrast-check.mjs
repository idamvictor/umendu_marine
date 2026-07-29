import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

const result = await page.evaluate(() => {
  const el = document.querySelector("footer h3");
  const style = getComputedStyle(el);
  let bgEl = el;
  let bg = "rgba(0, 0, 0, 0)";
  while (bgEl) {
    const c = getComputedStyle(bgEl).backgroundColor;
    if (c && c !== "rgba(0, 0, 0, 0)") { bg = c; break; }
    bgEl = bgEl.parentElement;
  }
  return { text: el.textContent, color: style.color, resolvedBackground: bg };
});
console.log(result);
await browser.close();
