/* @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
*/

// Test 1: Assert that the input is empty (to begin with).
// User Actions - visit URL, input field should be empty

// Import from playwright what we need to test (test and expect)
import { test, expect } from '@playwright/test';
const url = "http://localhost:3000/";

// Testing the loading of the page before each secondary test
test("has title", async ({ page }) => {
  await page.goto(url);
});

// Locate from page what we want to test 
// await page.getByRole('text')


