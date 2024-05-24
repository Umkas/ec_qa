import {test, expect} from '@playwright/test'
import { describe } from 'node:test'

describe ('wiki 5 tests - practice', async ({}) =>{
test('check wiki header logo and search field', async ({ page }) => {
    await page.goto("https://www.wikipedia.org/")
    await page.locator("//a[@id='js-link-box-en']").click

    await expect(page.locator("//img[@class='mw-logo-wordmark']")).toBeVisible

    await expect(page.locator("//input[@class='cdx-text-input__input']")).toBeVisible
});

test ('check wiki change localization by switching in search-box', async ({page}) => {
    await page.goto("https://www.wikipedia.org/")
    await page.waitForTimeout(2000) 
    await page.locator("//select[@id='searchLanguage']").selectOption("Українська")
    await page.waitForTimeout(2000)    
    await page.locator("//div[@id='search-input']").pressSequentially('мова')
    await page.waitForTimeout(2000)    
    await page.keyboard.press('Enter')
    await expect(page.locator("//h1[@id='firstHeading']")).toBeVisible
   
});
})