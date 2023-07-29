// const nArr = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const nArr = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");

let N = parseInt(nArr[0]);
let A = nArr[1].split(' ').map(Number);
let [B,C] = nArr[2].split(' ').map(Number);

let cnt = A.length;
let arr = A.map(e => e - B).map(r => r > 0 ? Math.ceil(r / C) : 0);
console.log(arr.reduce((a,b) => a+b) + cnt);
