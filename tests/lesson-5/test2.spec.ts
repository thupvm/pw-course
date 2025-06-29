// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, 
// hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// a. Sản phẩm 1: 2 sản phẩm
// b. Sản phẩm 2: 3 sản phẩm
// c. Sản phẩm 3: 1 sản phẩm

import { test, expect } from "@playwright/test";

let link = "https://material.playwrightvn.com/";

test('Excercise 2: Product Page', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        // navigate to link
        await page.goto(link);
    })

    await test.step("Click on Product page", async () => {
        // click to link
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

        // check page Simple E-commerce
        await expect(page).toHaveTitle(/Simple E-commerce/);

    })

    //Handle add products to cart
    await test.step("Add product to cart", async () => {
        const buttons = await page.locator("//button[text()='Add to Cart']");
        const count = await buttons.count();
        console.log(count);

        for (let i = 0; i < count; i++) {
            const id = await buttons.nth(i).getAttribute('data-product-id')
            console.log('id: ', id);
            let clickTimes = 0;
            switch (id) {
                case '1': clickTimes = 2;
                    break;
                case '2': clickTimes = 3;
                    break;

                case '3': clickTimes = 1;
                    break;

                default: clickTimes;
            }
            console.log(clickTimes);
            await buttons.nth(i).click({
                clickCount: clickTimes
            });
        }
    })
});
