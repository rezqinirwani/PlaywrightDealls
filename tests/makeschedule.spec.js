const {test,expect} = require("@playwright/test")

test("Request Schedule Without Login", async function({page}){
    await page.goto("https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring/rylai-crestfall-417")

    await page.locator("//button[contains(text(),'Ajukan Jadwal')]").click()
    
    await page.locator("//div[contains(text(),'Personal Development')]").click()
    await page.waitForTimeout(1000)
    await page.locator("#mentoring-schedule-topic-request-session-btn").click()
    await page.getByRole('button',{name:'Select Date Range'}).click()
    await page.getByLabel('Choose Thursday May 29 of').getByText('29').click();
    await page.getByLabel('Choose Friday May 30 of').getByText('30').click();
    await page.getByRole('button', { name: '- 30 Mei 2025' }).click();
    await page.locator("#proposedTimes_0_startTime").click()
    await page.locator("#proposedTimes_0_startTime").fill('10:00')
    await page.locator("#proposedTimes_0_endTime").click()
    await page.locator("#proposedTimes_0_endTime").fill('12:00')
    
    
    const disabled = await page.locator("#proposeLocation").isDisabled();
    if(disabled === false){
        await page.locator("#proposeLocation").click()
        await page.locator("input[value='Online']").check()
    }
    
    await page.locator("#mentoring-schedule-pick-schedule-request-session-btn").click()
    await page.locator("#fullName").fill('automation tiga')
    await page.locator("#whatsapp").fill('6281214144646')
    await page.locator("#email").fill('automationtiga@email.com')
    await page.locator("#birthDate").fill('01/01/1990')

    await page.locator("#mentoring-schedule-personal-information-request-session-btn").click()
    await page.locator("#password").fill('abcde123')
    await page.locator("#confirmPassword").fill('abcde123')
    await page.getByRole('checkbox',{name:"Saya telah memposting ulang postingan di atas & tag 3 teman di bagian komentar"}).check()
    await page.getByRole('checkbox',{name:"I commit to attend the schedule I’ve chosen & understand the failure to attend 2x may result to suspension"}).check()
    await page.locator("#mentoring-schedule-finish-request-session-btn").click()

    const msg = await page.locator("(//p[@class='mt-4 text-white text-xs leading-[150%] md:text-[15px]'])").textContent()
    await expect(msg==="kamu akan segera diberi tahu setelah Mentor menyetujui/menolak permintaan kamu.").toBeTruthy()
    await page.getByText('Lihat Detailnya').click()
    await expect(page).toHaveURL(/my-session/)
    
})