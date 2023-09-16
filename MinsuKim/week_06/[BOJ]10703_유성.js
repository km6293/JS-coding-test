let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let [col, row] = num.split(' ').map(Number);

let meteorList = Array.from({length:row}, () => []);
let earthList = Array.from({length:row}, () => []);

// X, #의 값 찾아서 List에 넣기
for(let i = 0; i < col; i++){
  for(let j = 0; j < row; j++){
    if(list[i][j] == 'X') meteorList[j].push(i);
    if(list[i][j] == '#') earthList[j].push(i);
  }
}

// 두 리스트를 비교하여 b - a의 가장 작은 값을 return 하는 func
function findDifference(a, b, min) {
  if (a.length === 0 || b.length === 0) return null;

  let smallest = min;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let difference = b[j] - a[i];
      if (difference >= 0 && difference <= smallest) smallest = difference -1;
    }
  }
  return smallest;
}

// 최소로 이동해야하는 값을 찾는다.
let minMove = col;
for(let i = 0; i < row; i++){
  let min = findDifference(meteorList[i], earthList[i], minMove);
  if(min !== null && minMove > min) minMove = min;
}

let strList = Array.from({length:row}, () => Array.from({length: col}, () => '.'));

for(let i = 0; i < earthList.length; i++){
  for(let j = 0 ; j < earthList[i].length; j++){
    strList[i][earthList[i][j]] = '#'
  }
}

for(let i = 0; i < meteorList.length; i++){
  for(let j = 0 ; j < meteorList[i].length; j++){
    strList[i][meteorList[i][j]+minMove] = 'X'
  }
}

let str = '';
for(let j = 0; j < col; j++){
  for(let i = 0; i < row; i++){
    str += strList[i][j]
  }
  str += '\n';
}

console.log(str.trim())