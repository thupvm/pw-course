// split()
// Bài 1: Tạo một chuỗi name với giá trị "Nguyễn Văn A". Hãy chia chuỗi thành mảng các từ.
const name = 'Nguyễn Văn A';
const word = name.split(' ');
console.log(word);

// Bài 2: Tạo một chuỗi emails với giá trị "example1@gmail.com,example2@gmail.com,example3@gmail.com". Hãy chia chuỗi thành mảng các email riêng lẻ.
const email = 'example1@gmail.com,example2@gmail.com,example3@gmail.com';
const emails = email.split(',');
console.log(emails);

// Bài 3: Tạo một chuỗi date với giá trị "2024-05-19". Hãy chia chuỗi thành mảng các phần riêng biệt của ngày tháng năm.
const date = '2024-05-19';
const parts = date.split('-');
console.log(parts);
