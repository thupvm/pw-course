// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3

array = [1, 2, 3, 4, 'text'];
array.forEach(element => {
    console.log(element);
});
array.forEach((element, index) => {
    console.log(`Elemenent [${index}]: ${element}`)
})

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. 
// Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
array = [1, 2, 3];
let sum = 0;
let max = array[0]; 
let min = array[0];

array.forEach(element => {
    sum += element;

    if(element > max) {
        max = element
    };

    if(element < min) {
        min = element
    };
})

console.log(`Sum: ${sum} -  Max: ${max} -  Min: ${min}`)


// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi.
//  Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
sampleArray = [1,2,3,4,5];
newArray = [];

sampleArray.forEach(element => {
    let newValue = element*2;
    newArray.push(newValue);
});

console.log(newArray);