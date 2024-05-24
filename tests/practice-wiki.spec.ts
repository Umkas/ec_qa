import {test, expect} from '@playwright/test'
import { describe } from 'node:test'

describe ('wiki 5 tests - practice', async ({}) =>{
    // test('wiki-login check visible username and password fields', async ({page}) => {
    //     await page.goto("https://www.wikipedia.org/ ")
    //     await page.getByRole('link', { name: 'English 6,792,000+ articles' }).click()
    //     await page.waitForTimeout(2000)
    //     // await page.waitForSelector("'link', { name: 'Log in' }")
    //     await page.getByRole('link', { name: 'Log in' }).click()
    //     await page.waitForTimeout(2000) 
    //     await expect(page.getByPlaceholder('Enter your username')).toBeVisible
    //     await expect(page.getByPlaceholder('Enter your password')).toBeVisible
    // })

    // test('wiki-login check incorrect username and password fields', async ({page}) => {
    //     await page.goto("https://www.wikipedia.org/ ")
    //     // await page.getByRole('link', { name: 'English 6,792,000+ articles' }).click()
    //     await page.locator("//a[@id='js-link-box-en']").click()
    //     await page.waitForTimeout(2000)      
    //     await page.getByRole('link', { name: 'Log in' }).click()
    //     await page.waitForTimeout(2000)      
    //     await page.getByPlaceholder('Enter your username').pressSequentially("111111")
    //     await page.getByPlaceholder('Enter your password').pressSequentially('pass1')
    //     await page.keyboard.press("Enter")
    //     await expect(page.locator("//div[contains(text(),'Incorrect')]")).toBeVisible
    // })

}) 