let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = num.split(' ').map(Number);
list = list.map(e => e.trim());

function getCombinations(arr, select){
  const results = [];
  if(select === 1) return arr.map(e => [e]);

  arr.forEach((e, i, o) => {
    const rest = o.slice(i + 1);
    const combinations = getCombinations(rest, select - 1);
    const attached = combinations.map(r => [e, ...r]);
    results.push(...attached);
  })
  
  return results;
}

let home = [];
let chicken = [];

list.forEach((e,i) => {
  let val = e.split(' ');
  for(let j = 0 ; j < val.length; j++){
    if(val[j] == 1) home.push([i,j]);
    if(val[j] == 2) chicken.push([i,j]);
  }
})

let len = Array.from({length:chicken.length}, (_,i) => i);
let comb = getCombinations(len, M);

let rArr = [];
comb.forEach(e => {
  let total = 0;
  for(let [a, b] of home){
    let chk = 99999999999;
    e.forEach(r => {
      let val = Math.abs(chicken[r][0] - a) + Math.abs(chicken[r][1] - b);
      if(chk > val) chk = val; 
    })
    total += chk;
  }
  rArr.push(total);
})

console.log(Math.min(...rArr));



