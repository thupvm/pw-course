// 1. Khởi động Tàu Vũ trụ K11

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
crew = ["Thư", "Dương", "Loan Anh", "Ngân", "Thư 2", "Dương 2", "Loan Anh 2", "Ngân 2"];

function launchShip(crew) {
    let text1 = "Chuẩn bị khởi động! Phi hành đoàn gồm: ";

    let text3 = `sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
    
    let text2 = "";
    for (const member of crew) {
        text2 += `${member}, `
    }

    return text1 + text2 + text3;

    // console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: ");
    // for (const member of crew) {
    //     console.log(member);
    // }
    // console.log(`sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`); 
} 


function launchShip2(crew) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: ");
    crew.forEach((member, index) => {
        console.log(`${index + 1}: ${member}`);
    });
    console.log(`sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`); 
}

function launchShip3(crew) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: ");
    for (let i = 0; i < crew.length; i++){
        console.log(crew[i]);
    }
    console.log(`sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`); 
} 

let output = launchShip(crew);
console.log(output);
// launchShip2(crew);
// launchShip3(crew);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    let distance = 0;
    distance = speed*time;
    return distance;
}

let outputCalDistance = calculateDistance(1000, 24);
console.log("Distance: ", outputCalDistance)

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    let hexadecimalTime = 0; 
    hexadecimalTime = time.toString(16);
    return hexadecimalTime;
}

let outputConvertTimeToHex = convertTimeToHex(120);
console.log("Converted Time To Hex: ", outputConvertTimeToHex);

// 4. Khám phá kho báu
function decryptCode(code) {
    const arr = [...code];
    let newCode = "";

    arr.forEach(element => {
        if(element == element.toLowerCase()) {
            element = element.toUpperCase();
        }
        else if (element == element.toUpperCase()) {
            element = element.toLowerCase();
        };
        newCode += element;
    });
    return newCode;
}

function decryptCode2(code) {
    let newCode = "";
    for(let i=0; i < code.length; i++){
        let temp = code[i];
        if(temp == temp.toLowerCase()) {
            temp = temp.toUpperCase();
        }
        else if (temp == temp.toUpperCase()) {
            temp = temp.toLowerCase();
        };
        newCode += temp;
    }
    return newCode;
}

let inputCode = "K11 Challenge";
// let outputDecryptCode = decryptCode(inputCode);
// console.log("DecryptCode: ", outputDecryptCode);

let outputDecryptCode2 = decryptCode2(inputCode);
console.log("DecryptCode2: ", outputDecryptCode2);

// 5. Trở về Trái Đất

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();