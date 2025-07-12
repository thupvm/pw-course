// Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy tính tổng các điểm.
const scores = [85, 90, 78];
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore);

// Bài 2: Tạo một mảng numbers chứa các số: 1, 2, 3, 4. Hãy tính tích của các số.
const numbers = [1, 2, 3, 4];
const product = numbers.reduce((product, number) => product * number, 1);
console.log(product);

// Bài 3: Tạo một mảng expenses chứa các giá trị chi phí: 50, 100, 150. Hãy tính tổng chi phí.
const expenses = [50, 100, 150];
const totalExpense = expenses.reduce((total, expense) => total + expense, 0);
console.log(totalExpense);
