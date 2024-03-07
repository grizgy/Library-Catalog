const { expect, test} = require('@playwright/test')

test ("Verify all books link is visible", async({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isAllBooksVisible = await allBooksLink.isVisible()
    expect(isAllBooksVisible).toBe(true);
}) 

test ("Verify login button is visible", async({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]')
    const isLoginButtonVisible = await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
}) 


test ("Verify register button is visible", async({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]')
    const isRegisterButtonVisible = await registerButton.isVisible()
    expect(isRegisterButtonVisible).toBe(true);
}) 