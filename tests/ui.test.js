const { expect, test} = require('@playwright/test')

const baseURL = "http://localhost:3000"


test ("Verify all books link is visible", async({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isAllBooksVisible = await allBooksLink.isVisible()
    expect(isAllBooksVisible).toBe(true);
}) 

test ("Verify login button is visible", async({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]')
    const isLoginButtonVisible = await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
}) 


test ("Verify register button is visible", async({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]')
    const isRegisterButtonVisible = await registerButton.isVisible()
    expect(isRegisterButtonVisible).toBe(true);
}) 


test.only ("Verify all books link is visible after user is logged in", async({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");

    await page.click('a[href="/login"]')
    await page.fill('#email', "peter@abv.bg")
    await page.fill('#password', "123456")
    await page.click('#login-form > fieldset > input')

    
     //check if logout button is visible
    const logoutButton = await page.$('#logoutBtn')
    const isLogoutButtonsVisible = await logoutButton.isVisible()
    expect(isLogoutButtonsVisible).toBe(true);


    //check if all books link is visible
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isAllBooksVisible = await allBooksLink.isVisible()
    expect(isAllBooksVisible).toBe(true);
}) 