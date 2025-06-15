// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. 
// Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
const student = {
    name: "Alex",
    age: 10,
    address: "HCM Ctity"
}
for (property in student) {
    console.log(`${property} = ${student[property]}`)
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. 
// Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
const studentObject = {
    name: "Alex",
    age: 10,
    salary: 20,
    class: 12
}
console.log(typeof studentObject.age);

let sum = 0;

for(property in studentObject) {
    if(typeof studentObject[property] === 'number') {
        sum += studentObject[property]
    }
}

console.log(sum);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. 
// Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]

// const studentObject = {
//     name: "Alex",
//     age: 10,
//     salary: 20,
//     class: 12
// }
arr = [];
for(property in studentObject) {
    arr.push(property)
}
console.log(arr);
