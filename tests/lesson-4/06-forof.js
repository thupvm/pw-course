// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. 
// Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3 
// thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
array = [1, 3, 2, 3, 4, 3, 55, 23, 3];
const number = 3;

for (const [index, element] of array.entries()) {
    if (element === 3) {
        console.log(`The frist position: ${index}`);
        break;
    }
};

for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 3) {
        console.log(`The last position: ${i}`);
        break;
    }
}

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. 
// Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”]
// => dua vao bai tap for
let str = "Playwright";
arrStr = [];
for (let i = str.length - 1; i >= 0; i--) {
    arrStr.push(str[i]);
}
console.log(arrStr);

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng.
// Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
arrrNum = [1, 2, 3, 1, 2, 4, 5, 6, 7, 7, 8, 9, 10];
arrUniqueNum = [];
for (RootElement of arrrNum) {
    tempArr = [];
    arrrNum.forEach(element => {
        if(RootElement === element) {
            tempArr.push(element);
        }
    });

    // 1st way:
    // if(tempArr.length === 1) {
    //     arrUniqueNum.push(RootElement);
    // }

    // 2nd way
    if(tempArr.length > 1) {
        continue;
    };
    arrUniqueNum.push(RootElement);
}
console.log(arrUniqueNum);