import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 200 }, deviceScaleFactor: 3 });
const page = await context.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.screenshot({ path: "./.scratch-screens/mobile-header-crop.png" });
await context.close();
await browser.close();
