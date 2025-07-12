// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tìm điểm số đầu tiên lớn hơn 80.
const scores = [85, 90, 78];
const firstScore = scores.find((score) => score > 80);
console.log(firstScore);

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy tìm tuổi đầu tiên lớn hơn 20.
const ages = [18, 21, 16, 25];
const firstAge = ages.find((age) => age > 20);
console.log(firstAge);

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy tìm từ đầu tiên có độ dài lớn hơn 5 ký tự.
const words = ['apple', 'banana', 'cherry', 'date'];
const firstWord = words.find((word) => word.length > 5);
console.log(firstWord);
