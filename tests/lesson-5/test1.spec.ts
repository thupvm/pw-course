// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// Nhập đầy đủ các thông tin, click button register

import { test, expect } from "@playwright/test";

let link = "https://material.playwrightvn.com/";

test('Excercise 1: Register Page', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        // navigate to link
        await page.goto(link);
    })

    await test.step("Click on User Register", async () => {
        // click to link
        await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

        // check page User Register
        await expect(page).toHaveTitle(/User Registration/);
    })

    await test.step("Fill the info for all fields", async () => {
        // input info 
        await page.locator("//input[@id='username']").fill('lisa');
        await page.locator("//input[@id='email']").pressSequentially('lisa.phan@gmail.com');

        const isChecked = await page.locator("//input[@id='female']").isChecked();
        if (isChecked == false) {
            await page.locator("//input[@id='female']").check();
        }
        console.log('isCheck: ', isChecked);

        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();

        await page.selectOption("//select[@id='interests']", [
            { value: "technology" },
            { value: "science" },
            { value: "music" }
        ]);

        await page.locator("//select[@id='country']").selectOption({ value: "australia" });

        await page.locator("//input[@id='dob']").fill('1996-07-16');
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/images/thẻ_đóng_mở.png");
        await page.locator("//textarea[@id='bio']").pressSequentially('Be yourself');
        await page.locator("//input[@id='rating']").fill('7');
        await page.locator("//input[@id='favcolor']").fill('#2b00ff');
        
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();

        await page.locator("//span[contains(@class, 'slider round')]").click();

        await page.evaluate(() => {
            const rating = 4.6;
            const percent = (rating / 5) * 100;

            const ratingValue = document.getElementById('starRatingValue');
            if (ratingValue) ratingValue.textContent = `${rating}`;

            const star = document.getElementById('starRating');
            if (star) {
                star.setAttribute('data-rating', `${rating}`);
                star.style.setProperty('--rating-width', `${percent}%`);
            }
        });

        // await page.locator("//input[@id='customDate']").fill('2025-06-22');

    })

    await test.step("Click Register Button", async () => {
        // click button Register
        await page.locator("//button[@type='submit' and text()='Register']").click();
    })





});
