// 첫번째 풀이 - 메모리 초과
// let [N, input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// // let [N, input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// input = input.split(' ').map(Number);
// let result = [];

// function findMax(arr, value){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > value)return arr[i];
//   }
//   return -1
// }

// for(let i = 0; i < input.length; i++){
//   let max = findMax([...input].slice(i, input.length), input[i]);
//   result.push(max === input[i] ? -1 : max);
// }

// console.log(result.join(' '))



let [N, input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [N, input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

input = input.split(' ').map(Number);
let stack = [];

for(let i = 0; i < N; i++){
  while(stack.length && input[stack[stack.length -1]] < input[i]){
    input[stack.pop()] = input[i];
  }
  stack.push(i);
}

while(stack.length){
  input[stack.pop()] = -1;
}

console.log(input.join(' '))


