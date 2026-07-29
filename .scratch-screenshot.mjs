import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const outDir = process.argv[2] || "./screenshots";
mkdirSync(outDir, { recursive: true });

const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["services-maintenance", "/services/maintenance-repairs"],
  ["services-engineering", "/services/engineering-services"],
  ["services-other", "/services/other-services"],
  ["projects", "/projects"],
  ["contact", "/contact"],
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const browser = await chromium.launch({ headless: true });

for (const [device, viewport] of Object.entries(viewports)) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 2 });
  const page = await context.newPage();
  for (const [name, path] of pages) {
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `${outDir}/${device}-${name}.png`,
      fullPage: true,
    });
    console.log(`captured ${device}-${name}`);
  }
  await context.close();
}

await browser.close();
