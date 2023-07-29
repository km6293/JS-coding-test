// let [a,b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let [a,b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(" ").map(Number);

let numList = new Array(a).fill().map((e,i) => i+1);
let result = [];

function findAll(nowList, remainList){
  if(nowList.length === b){
    result.push(nowList);
  }else{
    [...remainList].forEach((e, i, originList) => {
      findAll([...nowList, e], [...originList].filter(r => r !== e));
    })
  }
}

findAll([],numList);

result.forEach(e => console.log(...e) + '\n');