// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”.
// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ


import { test, expect } from "@playwright/test";
import { count } from "console";
import { TIMEOUT } from "dns";
import { waitForDebugger } from "inspector";

let link = "https://material.playwrightvn.com/";

test('Excercise 3: Todo Page', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        // navigate to link
        await page.goto(link);
    })

    await test.step("Click on Todo page", async () => {
        // click to link
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

        // check page To-Do List
        await expect(page).toHaveTitle(/To-Do List/);
    })

    await test.step("Add ToDo List", async () => {
        // input 100 todo task
        let input = await page.locator("//input[@id='new-task']");
        let btnAdd = await page.locator("//button[@id='add-task']");

        for (let i = 0; i < 100; i++) {
            await input.fill(`ToDo <${i + 1}>`);
            await btnAdd.click();
        };
    })

    await test.step("Delete Odd Title Element", async () => {
        // Đăng ký xử lý dialog 1 lần trước vòng lặp
        page.on('dialog', async dialog => {
            console.log('Dialog shown:', dialog.message());
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i +=2) {
            if (i % 2 !== 0) {
                console.log(i);
                await page.locator(`//button[@id='todo-${i}--delete']`).click({timeout: 500});
            }
        }
    });
});
