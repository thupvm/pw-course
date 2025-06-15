# Lesson 4

## Phạm vi của biến
### var: global
### let: scope {}

## Điều kiện nâng cao: 
### if ... else
### if…else if
### switch…case:
- switch(expression) {

    case x:
        // code block
        break;

    case y:
        // code block
        break;
        
    default:
        // code block
    }
- Example 1:

    switch(true) {
        
        case (age < 5):
            ticket = 0;
            break;
        case (age >= 6 && age <= 18):
            ticket = 50;
            break;
        default:
            ticket = 100;
        }
        - Example 2: 
        switch(age) {
        case 5:
            ticket = 0;
            break;
        case 18:
            ticket = 50;
            break;
        default:
            ticket = 100;
        }
## == và !=
### == và !=
    - So sánh kiểu “lỏng lẻo”, chỉ so sánh giá trị
    - Convert giá trị về kiểu “lớn hơn”
### ===, !==: 
- so sánh tuyệt đối (value + type)

## Vòng gặp nâng cao:
### for...in
    - use for Object
    - for (key in object) {
        // code block to be executed
    }
    - Example: 
        - let juice = {
            Banana: 9,
            Apple: 10,
            Orange: 5
        }; 

        for (let property in juice) {

            console.log("property: ", property); 
            console.log("value: ", juice[property]); 
            console.log("Test:", juice.property); // ko hợp lệ
        }

        //Output: 

        // property: Banana, Apple, Orange

        // value: 9,10, 5

        // Test: undefine

            
### forEach
    - use for array
    - array.forEach((value, index) => {


        })
    - Example: 

        const fruit = ["Apple", "Banana", "Orange"]   ;

        fruit.forEach(element => {
            console.log(element)
        }); // output: Apple, Banana, Orange

        fruit.forEach((element,index) => {

            console.log(`Juice at position ${index} is ${element}`)
        }); 
### for... of
    - use for array
    - for (const value of arr) {
        // code here
    }
    - Example: 

        const colors = ["Red", "Blue", "Green"];

        for (const color of colors) {
            console.log(color)
        }

## break, continue
### The break statement "jumps out" of a loop.
    - Example: 

    const arr = [11, 23, 22, 17];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 === 0) {
            break;
        };
        console.log(arr[i]); // output: 11, 23
    };

    for (let i = 1; i <= 5; i++) {
        if (i%2 === 0) {
            break;
        };
        console.log(i); // output: 1
    }

### The continue statement "jumps over" one iteration in the loop.
    for (let i = 0; i <= 5; i++) {
        if (i % 2 === 0) {
            continue;
        }

        console.log(i); // output: 1,3,5
    }

### Bản chất một chuỗi cũng là một mảng. 
- Ví dụ chuỗi "Playwright" bản chất là một mảng gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
- Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index
- Ví dụ:

    const str = "K6 2024";
    for (let i = 0; i < str.length; i++){
    console.log(str[i]);
    }

    // Kết quả in ra:
    K
    6 
    [space]
    2
    0
    2
    4    