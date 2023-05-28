import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('If click a count up button, increment a number.', async ({ page }) => {
  // data-testid 属性が count-up-button な要素をクリックする
  await page.locator('data-testid=count-up-button').click();
  // data-testid 属性が count な要素のテキストが1になっていることを確認
  await expect(page.locator('data-testid=count')).toContainText('1');
});
