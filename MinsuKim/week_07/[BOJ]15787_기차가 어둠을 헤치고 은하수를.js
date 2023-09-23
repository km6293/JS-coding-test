let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

list = list.map(e => e.trim());

const [N, M] = num.split(' ').map(Number);
let trainList = Array.from({length : N} , (_) => '0'.repeat(20));

for(let i = 0 ; i < M; i++){
  let [a,b,c] = list[i].split(' ').map(Number);
  let index = b-1;

  if(a === 1){
    trainList[index] = trainList[index].substring(0, c-1) + '1' + trainList[index].substring(c);
  } else if(a === 2){
     trainList[index] = trainList[index].substring(0, c-1) + '0' + trainList[index].substring(c);
  }else if(a === 3){
    trainList[index] = '0' + trainList[index].substring(0, trainList[index].length - 1);
  }else if(a === 4){ 
    trainList[index] = trainList[index].substring(1, trainList[index].length) + '0';
  }
}

let setList = new Set(trainList);
console.log(setList.size);


