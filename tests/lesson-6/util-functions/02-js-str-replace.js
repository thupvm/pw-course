// replace()
// Bài 1: Tạo một chuỗi phoneNumber với giá trị "0123 456 789". Hãy thay thế tất cả khoảng trắng bằng dấu chấm.
let phoneNumber = '0123 456 789';
phoneNumber = phoneNumber.replace(/ /g, '.');
console.log(phoneNumber);

// Bài 2: Tạo một chuỗi report với giá trị "Có một lỗi trong hệ thống.". Hãy thay thế từ "lỗi" bằng từ "bug".
let report = 'Có một lỗi trong hệ thống.';
report = report.replace('lỗi', 'bug');
console.log(report);

// Bài 3: Tạo một chuỗi numbers với giá trị "1,234,567". Hãy thay thế tất cả dấu phẩy bằng dấu chấm.
let numbers = '1,234,567';
numbers = numbers.replace(/,/g, '.');
console.log(numbers);
