import { test } from '@playwright/test';

test("To do list Page", async ({ page }) => {
    await test.step('Go to Bài học 3: To do list ', async () => {
        await page.goto('https://material.playwrightvn.com/')
    })
    await test.step('Click Bài học 3', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    })
    for (let i = 1; i <= 100; i++) {
        await test.step('Input new task', async () => {
            await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        })
        await test.step('Submit', async () => {
            await page.locator("//button[@id='add-task']").click();
        })
    }

    let count = await page.locator('#task-list li').count();
    // Duyệt từ cuối danh sách xuống để tránh lỗi khi xóa làm thay đổi index
    for (let i = count - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            page.once('dialog', async (dialog) => {
                await dialog.accept();
            });
            // Click nút có onclick="deleteTask(i)"
            await page.locator(`button[onclick="deleteTask(${i})"]`).click();
        }
    }




})