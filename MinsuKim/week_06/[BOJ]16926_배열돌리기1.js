const [input, ...inputList] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// const [input, ...inputList] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

// 세로, 가로, 회전수
const [col, row, rotation] = input.split(' ').map(Number);
// 받아온 리스트를 보기쉽게 2차원 리스트로 수정
let list = [...inputList].map(e => e.split(' ').map(Number));
// 시간초과떄문에 따로 빼놓음.
let sampleList = Array.from({length: col}, () => Array.from({length:row}).fill(0));
// min은 min(N, M) mod 2 = 0 를 참고한것.
let min = Math.min(col, row) / 2;

for(let i = 0 ; i < rotation; i++){
  // 2차원 빈 배열
  let tempList = sampleList.map(e => [...e]);
  for(let i = 0 ; i < min; i++){
    // 윗쪽, 아랫쪽
    for(let j = 0+i; j < row-i-1; j++){
      tempList[i][j] = list[i][j+1];
      tempList[col-i-1][j+1] = list[col-i-1][j];
    }
    // 왼쪽, 오른쪽
    for(let j = 0+i; j < col-i-1; j++){
      tempList[j+1][i] = list[j][i];
      tempList[j][row-i-1] = list[j+1][row-i-1];
    }
  }
  // 값 덮어 씌우기
  list = tempList;
}

console.log(list.map(e => e.join(' ')).join('\n'));