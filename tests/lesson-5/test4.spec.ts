// Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc,
// b. Thực hiện search theo tiêu đề bài báo bất kì.


import { test, expect } from "@playwright/test";

let link = "https://material.playwrightvn.com/";

test('Excercise 4: Personal notes', async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        // navigate to link
        await page.goto(link);
    })

    await test.step("Click on Personal notes page", async () => {
        // click to link
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

        // check page Personal Notes
        await expect(page).toHaveTitle(/Personal Notes/);
    })

    await test.step("Add Notes and Search", async () => {
        // create note array
        const notes = [
            {
                title: 'Chatbot AI có thể khiến não người lười vận động',
                content: 'Nghiên cứu kéo dài 4 tháng của nhóm chuyên gia từ MIT Media Lab phát hiện, người dùng chatbot AI có hoạt động não và trí nhớ suy giảm.'
            },
            {
                title: 'Alexandr Wang - thiên tài AI khiến Zuckerberg đặt cược 14 tỷ USD',
                content: 'CEO Meta Mark Zuckerberg chi 14,3 tỷ USD mua 49% cổ phần của startup Scale AI, nhưng mục tiêu chính được cho là chiêu mộ Alexandr Wang.'
            },
            {
                title: 'Cá heo mạo hiểm kết bạn với cá voi sát thủ',
                content: 'Các nhà khoa học ghi nhận trường hợp tương tác thân thiện đầu tiên giữa cá voi sát thủ và cá heo nhỏ hơn ngoài khơi British Columbia.'
            },
            {
                title: 'Trump T1 Phone có thiết kế giống smartphone nào?',
                content: 'Mẫu điện thoại Trump T1 Phone có thiết kế và cấu hình gần giống một số smartphone Trung Quốc được bán ở Mỹ như Doogee, Ulefone, Revvl 7.'
            },
            {
                title: 'Báo chí khai thác dữ liệu để giữ chân độc giả',
                content: 'Dữ liệu đang góp phần định hình việc vận hành của các tòa soạn hiện đại, nhất là ở những cơ quan báo chí lớn. '
            },
            {
                title: 'Tác nghiệp báo chí thời AI',
                content: 'Sau cuộc hội thảo kéo dài gần ba tiếng, Nhật Hưng mở ứng dụng AI chuyển giọng nói thành văn bản, lấy dữ liệu đưa tiếp vào ChatGPT để biên tập.'
            },
            {
                title: 'Camera lớn nhất thế giới hứa hẹn thay đổi ngành thiên văn',
                content: 'Camera LSST sẽ giúp các nhà nghiên cứu quan sát bầu trời ở mức độ chi tiết chưa từng có cũng như khám phá bí mật của vật chất tối và năng lượng tối.'
            },
            {
                title: 'Coteccons tung tháp căn hộ mới 3 mặt view sông từ 460 triệu đồng',
                content: 'Mặt tiền quốc lộ 13, cách TP HCM 800 m, hoàn tiền 10%, BIDV cho vay 70%, miễn gốc lãi 36 tháng.'
            },
            {
                title: 'Tòa soạn báo cần dùng AI để giải bài toán sống còn',
                content: 'Ứng dụng AI trong nhiều tòa soạn báo ở Việt Nam được đánh giá còn tự phát, manh'
            },
            {
                title: 'Trạm thu phát gốc 5G đạt giải Tuổi trẻ sáng tạo trong Quân đội',
                content: 'Trạm thu phát gốc 5G gNodeB 8T8R do các kỹ sư Việt nghiên cứu, phát triển'
            }
        ];

        // add
        for (let i = 0; i < notes.length; i++) {
            await page.locator("//input[@id='note-title']").fill(`${notes[i].title}`);
            await page.locator("//textarea[@id='note-content']").fill(`${notes[i].content}`);
            await page.locator("//button[@id='add-note']").click();
        }

        // search note
        const searchTitle = notes[3].title; // ví dụ: tìm theo tiêu đề thứ 4
        await page.locator("//input[@id='search']").pressSequentially(searchTitle);
        await page.waitForTimeout(500); // đợi kết quả lọc

        await expect(page.locator("//ul[@id='notes-list']")).toContainText(searchTitle);
    })
});

test('Advance: Add personal notes', async ({ page }) => {
    let titles, description;
    await test.step("Access page vnexpress to get data", async () => {
        // navigate to link
        await page.goto("https://vnexpress.net/khoa-hoc", { waitUntil: "domcontentloaded" });
        titles = await page.locator('//h4[@class="title-news"]').allTextContents();
        // console.log(titles);
        description = await page.locator("//p[@class='description']").allTextContents();
        // console.log(description);
    });

    await test.step("Navigate to Material Playwright Page", async () => {
        // navigate to link
        await page.goto(link);
        // click to link Bài học 4: Personal notes
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    });

    await test.step("Add Notes and Search", async () => {
        // add 
        for (let i = 0; i < 10; i++) {
            await page.locator("//input[@id='note-title']").fill(`${titles[i]}`);
            await page.locator("//textarea[@id='note-content']").fill(`${description[i]}`);
            await page.locator("//button[@id='add-note']").click();
        }

        // search note
        const searchTitle = titles[3].trim(); // ví dụ: tìm theo tiêu đề thứ 4
        await page.locator("//input[@id='search']").fill(searchTitle);
        await page.waitForTimeout(500); // đợi kết quả lọc

        await expect(page.locator("//ul[@id='notes-list']")).toContainText(searchTitle);
    })
});