# Lesson 5
## DOM = Document Object Model
- dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…
- Element, ví dụ: 
![thẻ đóng mở](images\thẻ_đóng_mở.png)
![thẻ tự đóng](images\thẻ_tự_đóng.png)

## Thẻ HTML thông dụng
- <div>
- <h1></h1> đến <h6>
- <form></form>: chứa 1 form thông tin
- input: text, eamil, radio, checkbox, file, color, range, date
- textarea: show ô input, dạng to
- radio button: tạo nút chọn chỉ 1 (radio)
- checkbox: tạo nút nhiều lựa chọn (checkbox)
- list và dropdown: show danh sách hoặc menu thả xuống
- button: tạo nút bấm
- table: hiển thị bảng dữ liệu
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm
    - tbody:
        - tr -> td = table dât
- date picker: tạo bộ chọn ngày
- slider: tạo thanh trượt
- iframe: hiển thị nội dung từ 1 trang web khác bên trong trang hiện tại

## Tool vẽ DOM trên Drive: Mind Mup

## Selector
- Là cách chọn phần tử trên trang
- Có nhiều kiểu:
    - XPath selector
    - CSS selector
    - Playwright selector 
### XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
        - ví dụ: /html/tbody/div/div/form/id
    - Tương đối: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        //tenthe[@thuoctinh=”giatri”]
        - ví dụ: //form[@id="register"]
- Nên dùng XPath tương đối

## Playwright basic syntax
### test: Đơn vị cơ bản để khai báo một test
    import { test } from '@playwright/test';

    test('<tên test>', async ({ page }) => {

        // Code của test

    });
### step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
- Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
- await test.step('Tên step', async () => {

    // Code here

    });
- test('<tên test>', async ({ page }) => {

        await test.step('Tên step', async () => {

            // Code here

        });

    });
### Basic actions
#### Navigate
    await page.goto('https://pw-practice.playwrightvn.com/');

#### Click
- Single click
    - await page.locator("//button").click();
- Double click
    - await page.locator("//button").dblclick();
-  Click chuột phải
    - page.locator("//button").click({

            button: 'right'

        })
- Click chuột kèm bấm phím khác

    - page.locator("").click({

            modifiers: ['Shift'],
        
        })
#### Input
- Fill: Giống việc bạn paste content vào một ô input
    - page.locator("//input").fill('Playwright Viet Nam');
- PressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
    - page.locator("//input").pressSequentially('Playwright Viet Nam', {

        delay: 100,

        });
#### Radio/checkbox
- Lấy giá trị hiện tại đang là check hay không:

        const isChecked =
        page.locator("//input").isChecked();
- Check/ uncheck

        page.locator("//input").check();
        page.locator("//input").setChecked(false);
#### Select option (example: dropdown list)
        page.locator("//input").selectOption({ value: "canada"})
#### Set Input File
        page.locator("//input").setInputFiles("images.jpg")

### Hover
- Để hover vào phần tử, ta dùng hàm hover:
- await page.locator("<xpath here>").hover();

### text()
- Hàm text()dùng để tìm ra phần tử có giá trị tương ứng. 
- Ví dụ Với DOM sau:

        <div @class=”playwright”>This is a text</div>
        Thì để chọn phần tử này, ta dùng cú pháp như sau:
        //div[text()=’This is a text’]

### contains()
- Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. 
- Ví dụ

        <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
        <div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
        Để chọn các phần tử này, ta cùng hàm contains(<giá trị>, <giá trị contains>). 
        - Ví dụ
        //div[contains(text(), ‘Tôi là Alex’)]
        //div[contains(text(), ‘Bây giờ là:’)]

### confirmation dialog
- Ví dụ sau khi add/xóa 1 sản phẩm, hiện confirm dialog, có 2 button: yes hoặc no
- Sự kiện dialog phải được thực hiện trước khi sự kiện trigger dialog đó diễn ra, ví dụ: 

        page.on('dialog', dialog => dialog.accept()); // before clicking on button delete
        await page.click("//button[text()='Delete']");
