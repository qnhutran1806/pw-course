import { test } from '@playwright/test';

test("Register Page", async ({ page }) => {
    await test.step('Go to Bài học 1: Register Page', async () => {
        await page.goto('https://material.playwrightvn.com/')
    })
    await test.step('Click Bài học 1', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })
    await test.step('Input username', async () => {
        await page.locator("//input[@name='username']").fill('Nhu Tran');
    })
    await test.step('Input email', async () => {
        await page.locator("//input[@name='email']").fill('qnhutran1806@gmail.com');
    })
    await test.step('Choose gender', async () => {
        await page.locator("//input[@id='female']").check();
    })
    await test.step('Choose hobbies', async () => {
        await page.locator("//input[@id='traveling']").setChecked(true);
    })
    await test.step('Choose interests', async () => {
        await page.selectOption('select#interests', 'music');
    })
    await test.step('Choose country', async () => {
        await page.locator("//select[@id='country']").selectOption({ value: "usa" });
    })
    await test.step('Choose birth', async () => {
        await page.locator("//input[@id='dob']").pressSequentially('06/18/2000', { delay: 100 });
    })
    await test.step('Upload image', async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/data/hinh-avatar-chibi-cute-gau-truc_031501168.jpg");
    })
    await test.step('Input biography', async () => {
        await page.locator("//textarea[@id='bio']").pressSequentially('Playwright Viet Nam', { delay: 100 });
    })
    await test.step('Input Rate Us', async () => {
        await page.locator("//input[@id='rating']").fill('8');
    })
    await test.step('Input color', async () => {
        await page.locator("//input[@id='favcolor']").fill('#654949');
    })
    await test.step('Input color', async () => {
        await page.locator("//input[@id='favcolor']").fill('#654949');
    })
    await test.step('Checkbox newsletter', async () => {
        await page.locator("//input[@id='newsletter']").setChecked(true);
    })
    await test.step('Input enable feature', async () => {
        await page.locator("//input[@id='toggleOption']").uncheck();
    })
    await test.step('Click button Register', async () => {
        await page.locator("//button[@type='submit']").click();
    })

})