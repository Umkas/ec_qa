import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Wikipedia', async ({ }) => {
    // test('check wiki header links', async ({ page }) => {
    //     await page.goto("https://www.wikipedia.org/ ")
    //     await page.locator("//a[@id='js-link-box-en']").click()

    //     await expect(page.locator("//a[contains(@href,'Create')][@data-mw='interface']")).toBeVisible
    //     await expect(page.locator("//a[contains(@href,'Login')][@data-mw='interface']")).toBeVisible
    // })


    // test('wikipedia check login navigation', async ({ page }) => {
    //     await page.goto("https://www.wikipedia.org/ ")
    //     await page.getByRole('link', { name: 'English 6,792,000+ articles' }).click();
    //     await page.getByRole('link', { name: 'Log in' }).click();
    //     await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible
    // })

    // test('check search works propertly', async ({page}) =>{
    //     await page.goto("https://www.wikipedia.org/ ")
    //     await page.locator("//a[@id='js-link-box-en']").click()
    //     //  await page.waitForTimeout(1000)  
    //     await page.getByPlaceholder('Search Wikipedia').pressSequentially("test automation")
    //     await page.keyboard.press('Enter')
    //     // await page.waitForTimeout(1000)  
    //     await expect(page.getByRole('heading', { name: 'Test automation', exact: true }).locator('span')).toBeVisible
    //     await expect(page.getByRole('heading', { name: 'Test automation', exact: true }).locator('span')).toHaveText("Test automation")

    //     await expect(page.locator("//ul[@id='mw-panel-toc-list']/li/a")).toHaveCount(12)
    // })

})

