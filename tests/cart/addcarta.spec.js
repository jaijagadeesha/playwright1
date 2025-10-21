import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
});
