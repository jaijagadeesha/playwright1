import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test.beforeEach(async ({ page }) => {
    console.log("Checking the before test");
    
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  console.log("Checked after the test");
  console.log("Checked after the test1");
  console.log("Checked after the test1");

});
