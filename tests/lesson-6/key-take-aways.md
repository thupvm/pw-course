# Lesson 6
## GIT

### Git Clone: 
- Lấy dự án có sẵn (remote) về máy tính (local)
- Câu lệnh: 
git clone <ssh_key>
- Câu lệnh khi muốn clone về với tên thư mục khác:
git clone <url> <new-name>

### Git branch
- Tạo branch: git branch <branch_new>
- Move sang branch có sẵn: git checkout <branch_name>
- Tạo branch mới và move sang branch đó: git checkout -b <branch_name>

### Git push
- Đưa code từ vùng repossitory len server
- Câu lệnh: 
git push <remote_name> <branch_name>
- Example: 
git push orgin main

### Git pull
- Lấy dữ liệu về
- Clone: lấy cả repo về
- Pull: chỉ lấy dữ liệu nhánh đó về máy
- git pull <remote_name> <branch_name>
- Example: git pull origin main

### Git merge request, reviewer
- Merge request = gộp code từ 1 nhánh sang nhánh còn lại
- Một lần review: một lần học từ người khác
- Đẩy code lên sớm thì sẽ được review kĩ

### Git: convention
- Giúp dễ đoán được ý đồ của PR/commit
- Gọn gàng, đồng bộ
- Đặt tên branch:
- feat/checkout
- fix/fill-info
- feat/lesson-6-long
- <type>/ <short-desciption>
- Type: 
- feat: tính năng mới
- fix: sửa lỗi
- conf: thay đổi cấu hình (config)
- chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
- Short-description: Mục đích của branch được tạo ra

## Javascript: util function
- Util: tiện ích
- Util function: các hàm tiện ích có sẵn
- Giúp xử lý code nhanh gọn hơn
- Util: String util and Array util

### String util
#### String Methods: 
- startsWith()
- endsWith()
- includes(): include string input, return true/false
- slice()
- toUpperCase()
- toLowerCase()
- charAt()
- split()
- unsplit()
- replace()
- repeat()
#### String utils function
- trim(): loại bỏ khoảng trắng
- toLowerCase() và toUpperCase()
- includes()
- replace(): thay thế ký tự trong string bằng 1 ký tự khác
- split(): return 1 string array chứa các phần tử của mảng được tách ra bởi ký tự input
- substring(): cắt chuỗi theo vị trí index (có from hoặc vừa from + to)
- indexOf()

### Array util
#### Array Methods: 
- toString()
- join(): return 1 string chứa các phần tử của mảng bị phân cách bởi ký tự input
- concat()
- splice()
- slice()
- indexOf(): return vị trí đầu tiên của ký tự input
- lastIndexOf()
- flat()
- forEach()
- map()
- filter()
- reduce()
- some()
- every()
- find()
- findIndex()
- sort()

#### Array utils function
- every: nếu tất cả các phần tử trong mảng đều thỏa yêu cầu -> return true
- filter: return mảng các elements thỏa điều kiện
- find: return element đầu tiên thỏa điều kiện
- join: return chuỗi gồm nhiều elements phân cách bởi 1 ký tự input
- map: return mảng đã được biến đổi theo yêu cầu
- push: thêm element vào cuối mảng
- pop: remove element cuối của mảng
- shift: remove element đầu tiên của mảng
- unshift: thêm element vào đầu mảng
- reduce: cộng dồn giá trị của các elements trong mảng. Có thể khai báo giá trị khởi tạo
- some: return true nếu có 1 phần tử thỏa đk
- sort: sắp xếp phần tử trong mảng, default tăng dần. Có thể custom để giảm dần
- reverse: reverse mảng (ko sắp xếp)

### Class
- Dùng để khai báo kiểu dữ liệu
- Class: declare & inheritance
- Lợi ích: 
+ Tái sd code
+ Tăng tính linh hoạt
- Khai báo: 
+ tên class
+ constructor
+ property
+ methods
+ methods with parameter
- Sử dụng: 
const student = new Student();
student.sayMyName();
- Ví dụ: 
Khai báo class LoginPage với method:
fillLogin(username, password)

### To run ts file: 
+ npm install -D ts-node typescript
+ npx tsc --init
+ Run: npx ts-node <fileName/path>
or npx tsx <fileName/path>