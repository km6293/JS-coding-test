// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [n,counts,input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let [a, b] = input.split(' ');
console.log(counts.split(' ').map(val => {
    let rtnVal = +val-a;
    rtnVal > 0 
    ? rtnVal % b == 0 ? (rtnVal = (rtnVal/b)+1) : (rtnVal = parseInt(rtnVal/b) + 2) 
    : (rtnVal = 1);
    return rtnVal;
}).reduce((acc,cur) => acc+=cur,0));