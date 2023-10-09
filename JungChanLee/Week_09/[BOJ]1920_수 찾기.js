let [...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let ns = input[1].trim().split(" ");
let ms = input[3].trim().split(" ");
let exMap = new Map();
ns.forEach(val => exMap.set(val,true));
console.log(ms.map(val => exMap.has(val) ? "1":"0").join("\n"));