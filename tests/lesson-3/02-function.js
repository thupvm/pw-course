
// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) 
// và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì

function calculateBMI(height, weight) {
    let result;
    let bmi = weight / (height * height);
    switch (true) {
        case (bmi < 18.5): result = "Thiếu cân";
            break;
        case (bmi < 25): result = "Bình thường";
            break;
        case (bmi < 30): result = "Thừa cân";
            break;
        default: result = "Béo phì";
    };
    console.log(`BMI: ${bmi} - ${result}`);
}
calculateBMI(1.55, 58)

function calculateBMI2(height, weight) {
    let bmi = weight / (height * height);
    switch (true) {
        case (bmi < 18.5): return "Thiếu cân";
            break;
        case (bmi < 25): return "Bình thường";
            break;
        case (bmi < 30): return "Thừa cân";
            break;
        default: return "Béo phì";
    };
}

let result = calculateBMI2(1.55, 50);
console.log("BMI result: " + result);

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. 
// Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
function transferTemperature(temp, type) {
    if (type == "C") return temp + 9 / 5 + 32;
    if (type == "F") return (temp - 32) * 5 / 9;
};
let result2 = transferTemperature(50, "F");
let result3 = transferTemperature(100, "C");

console.log("Transfered Temperature: ", result2);
console.log("Transfered Temperature: ", result3);


// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
array = [1, 3, 5, 7];
function sum() {
    let sumValue = 0;
    for (i = 0; i < array.length; i++) {
        sumValue += array[i];
    }
    console.log(`Sum of all element in array is ${sumValue}`)
}
sum();

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

// 2nd way
function isPrime2(number) {
    if (number < 2) return false;
    let squareNumber = Math.sqrt(number);
    for (i = 2; i <= squareNumber; i++) {
        if (number % i === 0) return false
    }
    return true;
}

function primeNumberFunction(arr) {
    // let primeNumberArr2 = [];
    // for(z=0; z < arr.length; z++) {
    //     if(isPrime2(arr[z])) {
    //         primeNumberArr2.push(arr[z])
    //     }
    // }
    // return primeNumberArr2;
    return arr.filter(isPrime2)
}

array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let resultPrimeNum = primeNumberFunction(array2);
console.log("Prime Number 2nd way: ", resultPrimeNum);


// 1st way:
array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime() {
    let notPrimeNumberArr = [];
    let primeNumberArr = [];
    for (i = 0; i <= array1.length; i++) {
        if (array1[i] < 2) {
            notPrimeNumberArr.push(array1[i])
        }
        else {
            for (k = 2; k < array1[i]; k++) {
                if (array1[i] % k === 0) {
                    notPrimeNumberArr.push(array1[i]);
                    break;
                }
            }
        }

    };

    for (k = 0; k < array1.length; k++) {
        if (!notPrimeNumberArr.includes(array1[k])) {
            primeNumberArr.push(array1[k])
        }
    }
    console.log("Prime: " + primeNumberArr);
}
isPrime();

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
const arrGlobal = [
    { name: "An", email: "an@gmail.com" },
    { name: "Binh", email: "binh@gmail.com" },
    { name: "Yen", email: "yen@gmail.com" },
    { name: "Hoa", email: "hoa@gmail.com" },
    { name: "Thanh", email: "thanh@gmail.com" },
];
function isUpdateEmail(name, newEmail) {
    for (i = 0; i < arrGlobal.length; i++) {
        objName = arrGlobal[i].name
        if (name == objName) {
            arrGlobal[i].email = newEmail
            return `updated email from ${arrGlobal[i].email} to ${newEmail}`;
        }
        return `No name is match. Not update any email`;
    }

};

let output = isUpdateEmail("An", "anNew@gmail.com");
console.log(output);


// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
arrayObj = [
    { "name": "Alex", score: 100 },
    { "name": "Anna", score: 100 },
    { "name": "Poppy", score: 100 },
    { "name": "Jimmy", score: 100 },
    { "name": "Johnson", score: 90.123 }
];

console.log("Average score: ", averageScore());

function averageScore() {
    let sumScore = 0;
    let averageScore = 0;
    for (element of arrayObj) {
        sumScore += element.score
    }
    averageScore = (sumScore / arrayObj.length)
        .toFixed(1); // get only 1 decimal
    return averageScore;
}

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
arrayObjProduct = [
    { "name": "product 1", price: 100 },
    { "name": "product 2", price: 20 },
    { "name": "product 3", price: 90 },
    { "name": "product 4", price: 0 },
    { "name": "product 5", price: 56 },
];

function checkPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].price)
        if (arr[i].price === 0)
            return true
    }
    return false

}

const checkPriceResult = checkPrice(arrayObjProduct);
console.log(checkPriceResult);
if (checkPriceResult === true) {
    console.log("Existing product with price = 0")
}
else {
    console.log("No product with price = 0")
}

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không.
// Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
function isShopOpen(hour) {
    if(hour >= 9 && hour <= 21)
        console.log("The shop is opening")
    else
        console.log("The shop is closed")
}

isShopOpen(9);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, 
// người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function getTicketPrice(age) {
    switch(true) {
        case (age < 5): console.log("Free ticket");
        break;
        case (age >= 6 && age <= 17): console.log("Ticket price: 50K");
        break;
        case (age > 17): console.log("Ticket Price: 100K");
        break;
        default: console.log("The age input is not correct")
    }
}
getTicketPrice(4)


// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào.
// Sử dụng câu lệnh switch...case để xử lý.
function printMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("Tháng Một");
            break;
        case 2:
            console.log("Tháng Hai");
            break;
        case 3:
            console.log("Tháng Ba");
            break;
        case 4:
            console.log("Tháng Tư");
            break;
        case 5:
            console.log("Tháng Năm");
            break;
        case 6:
            console.log("Tháng Sáu");
            break;
        case 7:
            console.log("Tháng Bảy");
            break;
        case 8:
            console.log("Tháng Tám");
            break;
        case 9:
            console.log("Tháng Chín");
            break;
        case 10:
            console.log("Tháng Mười");
            break;
        case 11:
            console.log("Tháng Mười Một");
            break;
        case 12:
            console.log("Tháng Mười Hai");
            break;
        default:
            console.log("Số tháng không hợp lệ. Vui lòng nhập từ 1 đến 12.");
    }
}

printMonthName(4);  // Output: Tháng Tư
printMonthName(12); // Output: Tháng Mười Hai
printMonthName(15); // Output: Số tháng không hợp lệ...

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8),
// trung bình (>= 5 và < 6.5), yếu (< 5).
function classifyStudent(score) {
    let gradeClassify;
    if (score >= 8) 
    {
        gradeClassify = "Gioi"
    } else if (score >=6.5 && score < 8) {
        gradeClassify = "Kha"
    } else if (score >=5 && score < 6.5) {
        gradeClassify = "Trung Binh"
    } else {
        gradeClassify = "Yeu"
    }

    console.log(`Score ${score} - Classify: ${gradeClassify}`)
}
classifyStudent(10);
classifyStudent(6.5);
classifyStudent(5);
classifyStudent(4);


// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết:
//  nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function reportWeather(temp) {
    let reportTemp;
    if (temp >= 30) 
    {
        reportTemp = "nóng"
    } else if (temp < 30 && temp >= 20) {
        reportTemp = "mát"
    } else {
        reportTemp = "lạnh"
    }

    console.log(`Temperature ${temp}: ${reportTemp}`)
}
reportWeather(31);
reportWeather(20);
reportWeather(19);