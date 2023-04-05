// const { test, expect } = require('@playwright/test');
// @ts-check
/*
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

// Test 1: Assert that the (input)textbox is empty (to begin with).
// User Actions - visit URL, (input)textbox field should be empty

// Import from playwright what we need to test (test and expect)
import { test, expect } from '@playwright/test';

// Testing the loading of the page before each secondary test
test('has title', async ({ page }) => {
	const url = 'http://localhost:3000';
	await page.goto(url);
	// select the (input)textbox where we type todos
	const textbox = page.getByRole('textbox', { name: 'New Todo:' });

	// selects the input/textbox where we add todos
	const locator = page.locator('input[type=text]');
	// select the add button
	const button = page.getByRole('button', { name: 'Add' });
	// wait for user to type 'hello'
	await locator.type('hello');
	// check input/textbox has the text 'hello'
	await expect(locator).toHaveValue('hello');
});
