import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://playwright.dev/
    await page.goto('https://playwright.dev/');

    // Click text=Get started
    await page.locator('text=Get started').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    // Click text=SearchK
    await page.locator('text=SearchK').click();

    // Fill [placeholder="Search docs"]
    await page.locator('[placeholder="Search docs"]').fill('locators');

    // Click div[role="button"]:has-text("CancelGuidesLocatorsCreating Locators​LocatorsFiltering Locators​LocatorsLocator")
    await page.locator('div[role="button"]:has-text("CancelGuidesLocatorsCreating Locators​LocatorsFiltering Locators​LocatorsLocator")').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/locators#locator-vs-elementhandle');

    // Click [aria-label="Docs pages navigation"] >> text=Mock APIs
    await page.locator('[aria-label="Docs pages navigation"] >> text=Mock APIs').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/mock');

    // Click [aria-label="Docs pages navigation"] >> text=Navigations
    await page.locator('[aria-label="Docs pages navigation"] >> text=Navigations').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/navigations');

});