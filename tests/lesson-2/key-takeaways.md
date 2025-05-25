# Lesson 2

## Version control system (VCS)
- Là hiện thống quản lý các phiên bản
- 3 cấp lưu trữ: Local (store ở máy cá nhân), Centralize (store ở 1 máy chủ tập trung), Distributed (store ở nhiều máy khác nhau)

## Git
### Phân biệt Git, GitHub
#### Git: là 1 phần mềm cài trên máy, command line tool, tool quản lý phiên bản, đưa file vào Git repository, có tính năng VCS
#### GitHub: dịch vụ web, host trên web, có giao diện, nơi upload Git repository, có tính năng VCS + 1 số tính năng khác

### Git - three states
- Working Directory: 
Các file mới hoặc có thay đổi
Lệnh: git init
- Staging Area:
file được đưa vào vùng chuẩn bị commit (tạo phiên bản mới)
lệnh: git add . or git add <fileName>
- Repository: các commit
lệnh: git commit -m "message"

### Git Global (default)
- git config --global user.name "name"
- git config --global user.email "email"

### Git cho 1 repo
- git config user.name "name"
- git config user.email "email"

### Git simple workflow
- Dùng Global config
init -> add -> commit -> push
- Ko dùng Global: 
init -> config -> add -> commit -> push


## JavaScript
- Là 1 ngôn ngữ lập trình (from 1995 by Brendan Eich)
- Giúp browser hoạt động
- Top 1 language: 
[survey top language by StackOverflow](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages)
- Chạy được do browser engine support  **(research more)**
- Để chạy trên máy tính không cần trình duyệt thì cần có Node JS
- Run time **(research more)**

### Lệnh chạy: node <file name with path>

### Variable: 
- Khai báo: 
var <variableName> = <value>;

let <variableName> = <value>;

const <variableName> = <value not change>;

- var: biến global, có thể khai báo nhiều biến trùng tên (ko nên dùng)
- Let: biến chỉ có giá trị trên dấu {}, ko thể khai báo nhiều biến trùng tên (nên dùng)
- Const: hằng số, value không đổi

### Data type (8 loại) - trong javascript ko cần khai báo data type
- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol
- Object

### Comparison operator (toán tử so sánh)
-  >, <
-  == (chỉ so sánh value), === (so sánh value + data type), !=, !==, >=, <=>

### Unary operator (toán tử một ngôi)
- Dùng để tăng hoặc giảm giá trị
- i++ // i = i+1
- i-- // i = i-1
- i+=4 // i = i+4

### Arithmetic operator (toán tử số học)
- +, -, *, /
- % (toán tử chia dư)
Example: 
1%2 = 1
3%3 = 0
3%2 = 1
100%80 = 20

### Nối chuỗi: 
- const str1 = “Hello”;
- const str2 = “Playwright Viet Nam”
- console.log(str1 + str2); // HelloPlaywright Viet Nam

### Conditional 
if (<điều kiện>) {// code}

### Loops
for(<khởi tạo>; <điều
kiện dừng>; <điều kiện tăng/giảm>) {
// code }


### Xuất kết quả ra màn hình:
console.log("string" + variableName) 

or 

console.log("string",  variableName) 

### Format code
- Window: Alt + Shift + F
- Mac: Option + Shift + F

