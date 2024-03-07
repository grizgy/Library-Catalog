const { expect, test} = require('@playwright/test')

test ("Verify all books link is visible", async({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isAllBooksVisible = await allBooksLink.isVisible()
    expect(isAllBooksVisible).toBe(true);
}) 