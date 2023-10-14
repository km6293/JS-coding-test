// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
}

let [...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim())[0];
let pairArr = [];
let answerArr = [];

var setInitPair = (str) => {
  let stack = new Stack();
  [...str].forEach((char,idx) => {
    if(char == "(") stack.push(idx);
    if(char == ")") pairArr.push([stack.pop(), idx]);
  });
};

var solve = () => {
  let dupleMap = new Map();
  var dfs = (rmvSize,cur,idx,arr) => {
    if(idx > pairArr.length) return;
    if(cur == rmvSize){
      let flag = new Array(input.length).fill(true);
      arr.forEach(cur => {flag[pairArr[cur][0]] = false; flag[pairArr[cur][1]] = false;});
      let tStr = [...input].map((cur,idx) => {
        if(flag[idx] == false) return "";
        return cur;
      }).join("");
      if(!dupleMap.has(tStr)){
        dupleMap.set(tStr,1);
        answerArr.push(tStr);
      }
      return;
    }

    let tArr = [...arr];
    tArr.push(idx);
    //현재 idx 선택
    dfs(rmvSize,cur+1,idx+1,tArr);
    //현재 idx 선택안함
    dfs(rmvSize,cur,idx+1,arr);
  };


  for(let i = 1 ; i <= pairArr.length ; i++){
    dfs(i,0,0,[]);
  }
};

setInitPair(input);
solve();
console.log(answerArr.sort().join("\n"));