const height = 155;
let heightMod;
let perfectWeight;
let maxWeight;
let minWeight;

heightMod = height % 100;
perfectWeight = heightMod * 9 / 10;
maxWeight = heightMod;
minWeight = heightMod * 8 / 10;

console.log(perfectWeight + '| '+ maxWeight + '| '+ minWeight)