// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let [column, row] = n.split(' ').map(Number);
input = input.map(e => e.split(' ').map(Number));

console.log(input);