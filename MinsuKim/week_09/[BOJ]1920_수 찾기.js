// 방법 1

const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, aList, M, mList] = input.map(e => e.trim().split(" "));
aList = aList.map(Number);
mList = mList.map(Number);
aList.sort((a,b) => a - b);
aList = [...new Set([...aList])];


function binarySearch(list, findNumber){
  let left = 0;
  let right = list.length - 1;
  let mid;
  while(left <= right){
    mid = Math.floor((left + right) / 2);
    if(list[mid] === findNumber) return 1;
    list[mid] < findNumber ? left = mid + 1 : right = mid - 1;
  }
  return 0;
}

let results = mList.map(e => binarySearch(aList, e));
console.log(results.join('\n'));


// 방법 2

// const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// const [N, aList, M, mList] = input.map(e => e.trim().split(" "));
// const aSet = new Set(aList.sort((a, b) => a - b));
// const results = mList.map(e => aSet.has(e) ? 1 : 0); 

// console.log(results.join('\n'));


// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// 방법 3

// const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// const [N, aList, M, mList] = input.map(e => e.trim().split(" "));
// const aSet = new Set(aList);
// const results = mList.map(e => aSet.has(e) ? 1 : 0); 

// console.log(results.join('\n'));


// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');