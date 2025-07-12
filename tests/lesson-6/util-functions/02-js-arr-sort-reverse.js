const scores = [85, 90, 78];
const sortScoreASC = scores.sort((a,b) => a-b);
console.log(sortScoreASC); // output: [78, 85, 90]


const ages = [18, 21, 16, 25];
const sortAgeDESC = ages.sort((a,b) => b-a);
console.log(sortAgeDESC); // Output: [25, 21, 18, 16]

const array = [18, 21, 16, 25];
const reverseArray = array.reverse(); // reverse, not sort
console.log(reverseArray); // Output: [25, 16, 21, 18]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortFruits = fruits.sort();
console.log(sortFruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

const singers = ["Taylor Swift", "Adele", "Ed Sheeran", "Shakira"];
const reverseSingers = singers.reverse();
console.log(reverseSingers); // output: [ 'Shakira', 'Ed Sheeran', 'Adele', 'Taylor Swift' ]