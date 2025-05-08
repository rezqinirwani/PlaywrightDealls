const {test,expect} = require("@playwright/test")

test("Login User", async function({page}){
    await page.goto("https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2Fmentoring")

    await page.getByPlaceholder('Enter your email').fill('pesertasatu@email.com')
    await page.getByPlaceholder('Enter your password').fill('abcde123')
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL(/mentoring/)
})
