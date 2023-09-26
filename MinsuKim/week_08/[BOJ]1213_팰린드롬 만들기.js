let str = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let str = require('fs').readFileSync("/dev/stdin").toString().trim();

let obj = {};

for(let i = 0; i < str.length; i++){
  obj[str[i]] = obj[str[i]] === undefined ? 1 : obj[str[i]] + 1;
}

const keys = Object.keys(obj).sort();
let sortedKeys = [];
let sortedValue = [];

for(const key of keys){
  sortedKeys.push(key);
  sortedValue.push(obj[key]);
}

if(sortedValue.filter(e => e % 2 === 1).length > 1) return console.log("I'm Sorry Hansoo");

let rStr = '';

sortedKeys.forEach((e,i) => {
  rStr += e.repeat(parseInt(sortedValue[i] / 2));
})

let chk = '';
let c = sortedValue.findIndex(e => e % 2 === 1);
if(c !== -1) chk += sortedKeys[c];

console.log(rStr + chk + rStr.split('').reverse().join(''));


