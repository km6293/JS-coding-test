// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
n = parseInt(n);
input = input.map(cur => cur.trim());
var solve = (cnt) => {

  let command = [...input[(cnt*3)+0]];
  let str = input[(cnt*3)+2].replace("[","").replace("]","");
  let arr = (str.length > 0 ? str.split(",") : []);
  let dir = 1;
  let strt = 0;
  let end = arr.length-1;

  for(let i = 0 ; i < command.length ; i++){
    let errFlag = false;
    command[i] == 'R' && (function(){
      dir *= -1;
      let t = strt; strt = end; end = t;
    })();

    command[i] == 'D' && (function(){
      if(dir > 0){
        if(strt > end){
          errFlag = true;
          return;
        }
        strt++;
      }else{
        if(strt < end){
          errFlag = true;
          return;
        }
        strt--;
      }
    })();
    if(errFlag) return console.log("error");
  }

  dir > 0 
  ? console.log("["+ arr.slice(strt,end+1).join(",") +"]")
  : console.log("["+ arr.slice(end,strt+1).reverse().join(",") +"]");
};
Array.from({length : n}, (a,i) => i).forEach(idx => solve(idx));