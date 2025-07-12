// substring()
// Bài 1: Tạo một chuỗi fullName với giá trị "Nguyễn Văn A". Hãy trích xuất tên họ từ chuỗi.
let fullName = 'Nguyễn Văn A';
let lastName = fullName.substring(11);
let firstName = fullName.substring(0, 6);
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

// Bài 2: Tạo một chuỗi date với giá trị "2024-05-19". Hãy trích xuất phần năm từ chuỗi.
let date = '2024-05-19';
let year = date.substring(0, 4);
console.log(year);

// Bài 3: Tạo một chuỗi email với giá trị "example@gmail.com". Hãy trích xuất phần tên miền từ chuỗi email.
let email = 'example@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);
console.log(domain);
