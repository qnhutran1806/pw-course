import { test } from '@playwright/test';

test("Product Page", async ({ page }) => {
    await test.step('Go to Bài học 2: Product Page ', async () => {
        await page.goto('https://material.playwrightvn.com/')
    })
    await test.step('Click Bài học 2', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })
    await test.step('Click Sản phẩm 1', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    })
    await test.step('Click Sản phẩm 2', async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    })
    await test.step('Click Sản phẩm 3', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    })

})