// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy lọc ra các học sinh có điểm trên 80.
const scores = [85, 90, 78];
const newScores = scores.filter((score) => score > 80);
console.log(newScores); // Output: [85, 90]

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy lọc ra các tuổi lớn hơn hoặc bằng 18.
const ages = [18, 21, 16, 25];
const newAges = ages.filter((age) => age >= 18);
console.log(newAges); // Output: [18, 21, 25]

// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy lọc ra các từ có độ dài lớn hơn 5 ký tự.
const words = ['apple', 'banana', 'cherry', 'date'];
const newWords = words.filter((word) => word.length > 5);
console.log(newWords);
