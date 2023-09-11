// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim());
let visit;
let strArr;
let strtArr;
let answerArr;
let flag;
let sortArr;
let strtFlag;
let dupleMap;

var dfs = (wordIdx) => {
  if(wordIdx == strArr.length){
    let t = answerArr.reduce((acc,cur) => acc+""+sortArr[cur],"");
    if(strArr.join("") < t){
      console.log(t);
      flag = true;
    }
    strtFlag = true;
    return;
  }

  for(let i = 0 ; i < strArr.length ; i++){
    if((strtFlag == true || strtArr[wordIdx] <= i) && visit[i] == false){
      let strDuple = answerArr.reduce((acc,cur) => cur > -1 ? acc+""+sortArr[cur] : acc,"")+sortArr[i];
      if(dupleMap.indexOf(strDuple) > -1) continue;
      dupleMap.push(strDuple);
      visit[i] = true;
      answerArr[wordIdx] = i;
      dfs(wordIdx+1);
      answerArr[wordIdx] = -1;
      visit[i] = false;

      if(flag == true) return;
    }
  }
};

input.forEach(cur => {
  visit = new Array(cur.length).fill(false);
  strtArr = new Array(cur.length).fill(0);
  answerArr = new Array(cur.length).fill(-1);
  dupleMap = [];
  strArr = [...cur];
  sortArr = [...cur].sort();
  flag = false;
  strtFlag = false;
  let tVisit = new Array(cur.length).fill(false);

  sortArr.forEach((cur,idx) => {
    for(let i = 0 , cnt = strArr.length ; i < cnt ; i++){
      if(strArr[i] == cur && tVisit[i] == false){
        tVisit[i] = true;
        strtArr[i] = idx;
        break;
      }
    }
  });

  dfs(0);
  if(flag == false) console.log(cur);
});