// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.
const score = [85, 90, 78];
const isGraterThan70 = score.every((score) => score > 70);
console.log(isGraterThan70);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem tất cả các tuổi đều lớn hơn 15 hay không.
const ages = [18, 21, 16, 25];
const isGraterThan15 = ages.every((age) => age > 15);
console.log(isGraterThan15);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.
const words = ['apple', 'banana', 'cherry', 'date'];
const isLengthGraterThan3 = words.every((word) => word.length > 3);
console.log(isLengthGraterThan3);
