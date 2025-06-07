# Lesson 3

## Git
### Undo actions
- Note: 
type clear: to clear old log in Git Bash mode

- `git log`: view commit history

- Change commit message:
    - 1st way: `git commit --amend "new message"`        
    - 2nd way: git commit --amend
        - Type "i": to open insert mode
        - Type "esc": to exit insert mode
        - Type ":wq": write and quit
        - Type ":q": quit

- `git restore --staged <file>`: transfer file(s) in staging area to working directory area

    ![alt text](images\git-restore.png)

- `git reset HEAD~1` (undo 1 commit) : transfer file(s) in repository area to working directory area (uncommit)

    ![alt text](images\git-reset.png)

### Branching model
- Branch: Dùng branch tạo vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định. Nếu không brach: back up file ra chỗ khác, lưu lại
- `git branch <ten_branch>`: Tạo branch
- `git checkout <ten_branch>`: switch branch
- `git checkout -b <ten_branch>`: vừa tạo vừa switch sang branch mới 
- Tip: luôn tạo branch mới trước khi thực hiện lệnh copy từ Internet
    ![alt text](images\git-branches.png)

- Git Ignore    
`.gitignore` = GitIgnore: Dùng để bỏ qua các file không cần git theo dõi.
    - Ignore file:
        `<file_name>`
    - Ignore folder:
        `<folder-name>/`
- Revision
    ![](images\git-revision.png)

## JavaScript - Advance concepts
### Convention
- snake_case_now_now
- kebab-case-now-now
- camelCaseNowNow
- PascalCaseNowNow

### console.log
- console.log('Toi la Nga');
- console.log("Toi la Phong");
- console.log(`${variable_name}`)
- let name = "Nga";
    - console.log(`Toi la ${name}`);
- console.log("Toi ten la" + name + " ")

### Object
- Object: là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến/ hằng số
- Khai báo:
    - let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
        …
    }
    // giá trị có thể là biến hoặc 1 object khác
- Ví dụ:
    - let user = {“name”: “Alex”, “age”: 10, “email”: “alex@gmail.com”}
    - const product = {
            “name”: “Laptop”,
            “price”: 500,
            “isWindow”: true,
            “manufacturer”: {
                “name”: “Acer”,
                “year”: 2024
        }
- Sử dụng:
    - console.log("name = " + user.name);
    - console.log("manufacturer name = " + product.manufacturer.name);
    - console.log("price = ", product[“price”]);

- Gắn lại giá trị: cả let và const đều gắn lại value khác được. Nhưng không thể khai báo đè lại
    - user.age = 28
    - product[“manufacturer”][“year”] = 2025
    - Can't use: 
        const product = {
            ...
            “manufacturer”: {
                ...
                “year”: 2025
        } 
        - Như ta đã biết, khi dùng const (hằng số), thì giá trị sẽ không thay đổi được. Ví dụ:
        const a = 10;
        a = 15; // lỗi
        Đối với object cũng vậy, nếu bạn thay cả object bằng một object mới, bạn cũng sẽ gặp lỗi. Ví
        dụ:
        const student = {“name”: “alex”, “age”: 20}
        student = {“name”: “Nagi”, “age”: 18} // lỗi
        Tuy nhiên, nếu bạn chỉ thay đổi các thuộc tính của object thì hoàn toàn hợp lệ. Ví dụ mình sẽ
        chỉ thay giá trị của name trong object student:
        const student = {“name”: “alex”, “age”: 20}
        student.name = “Nagi”; // Hợp lệ
- Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định
nghĩa thuộc tính mới. 
Ví dụ:
    let bike = {
        make: 'Yamaha',
        model: 'YZF-R3'
    };
    bike.color = “Blue”;
    bike[“price new”] = 100;
    console.log(bike);
    {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}
- Để xóa thuộc tính của object, chúng ta dùng hàm delete:
    let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
    };
    delete employee.age;
    console.log(employee);
    Kết quả:
    {name: 'Le Van C', department: 'HR'}

### Logical operator
    - `&&`: cả 2 vế mệnh đề đều đúng
    - `||`: 1 trong 2 vế mệnh đều đúng
    - `!`: đảo ngược value, example: !a, !!b

### Array
- Khai báo: a = [1, 2, 'a', false, true]
- Độ dài mảng: `a.length`
- Lấy phần tử theo index: `a[0]`, `a[1]`
- Để thêm phần tử vào mảng, ta dùng hàm push
Ví dụ:
const arr = [1,2];
arr.push(3);
console.log(arr);
// Kết quả in ra
[1, 2, 3]

### Function
- Function = hàm: là 1 đoạn code được đặt tên, có thể tái sử dụng, thực hiện 1 phép tính hoặc nhiệm vụ cụ thể
- Khai báo:
    - `function <nameFunction>() {
        // code
    }`
- Parameter: nameFunction(para1, para2)
- Return value: 
    - `function ABC() {
        return 10
    }`    