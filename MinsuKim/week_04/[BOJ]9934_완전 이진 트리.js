const [depth, list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// const [depth, list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

let level = parseInt(depth);
let numbers = list.split(' ').map(Number);
let returnList = Array.from({length : level}, () => []);

function findLCR(l,c,r,lv){

  // 중앙 값 넣기
  returnList[lv].push(c);

  // 마지막일 경우
  if(l.length === 1){
    returnList[lv+1].push(...l,...r);
    return;
  }

  // 왼쪽 리스트
  let lci = parseInt(l.length / 2)
  findLCR([...l].splice(0, lci), l[lci], [...l].splice(lci+1, l.length), lv+1);

  // 오른쪽 리스트
  let rci = parseInt(r.length / 2)
  findLCR([...r].splice(0, rci), r[rci], [...r].splice(rci+1, r.length), lv+1);

}

let ci = parseInt(numbers.length / 2);
findLCR([...numbers].splice(0, ci), numbers[ci], [...numbers].splice(ci+1, numbers.length),0)

for(let i = 0 ; i < returnList.length; i++){
  console.log(...returnList[i])
}
