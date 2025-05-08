const {test,expect} = require("@playwright/test")

test("Search Mentor", async function({page}){
    await page.goto("https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring")

    await page.locator("#searchMentor").fill('Benny')
    await page.waitForTimeout(500)
    await expect(page.locator("//h4")).toHaveText("Benny")
})

test("Select Mentor", async function({page}){
    await page.goto("https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring")

    await page.locator("#searchMentor").fill('Benny')
    await page.waitForTimeout(500)
    await page.getByAltText('Benny').click()
    await expect(page).toHaveURL(/selvie-860/)
})