import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('Take a screenshot.', async ({ page }) => {
  await page.screenshot({ path: './directory_contains_actual_images/example.png', fullPage: true });
});
