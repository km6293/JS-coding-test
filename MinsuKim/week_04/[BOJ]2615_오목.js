let list = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n').map(e => e.split(' ').map(Number));
// let list = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(e => e.split(' ').map(Number));
let result = [];
let chk = false;

function checkPattern(x, y, t, dx, dy){
  for(let p = 0 ; p < 5; p++){
    if(list[x+p*dx][y+p*dy] !== t) return false;
  }
  return true;
}

for(let i = 0; i < 19; i++){
  for(let r = 0; r < 19; r++){
    // 0이 아닌 경우
    if(list[i][r] !== 0){
      for(let z = 1; z < 3; z++){
  
        // 조건
        // 1. 이전값은 같은 값이면 안된다. 
        // 2. 총 5개를 놓을 수 있어야 한다.

        // 오른쪽 
        if(r < 15 && list[i]?.[r-1] !== list[i]?.[r] && list[i]?.[r+5] !== list[i]?.[r] && list[i][r] === z && checkPattern(i,r,z,0,1)){
          result.push(z,i,r)
          chk = true;
        }
        
        // 밑쪽
        if(i < 15 && list[i-1]?.[r] !== list[i]?.[r] && list[i+5]?.[r] !== list[i]?.[r] && list[i][r] === z && checkPattern(i,r,z,1,0)){
          result.push(z,i,r)
          chk = true;
        }
        
        // 왼쪽 대각선
        if(i < 15 && r > 3 && list[i-1]?.[r+1] !== list[i]?.[r] && list[i+5]?.[r-5] !== list[i]?.[r] && list[i][r] === z && checkPattern(i,r,z,1,-1)){
          result.push(z,i+4,r-4)
          chk = true;
        }
        
        // 오른쪽 대각선
        if(i < 15 && r < 15 && list[i-1]?.[r-1] !== list[i]?.[r] && list[i+5]?.[r+5] !== list[i]?.[r] && list[i][r] === z && checkPattern(i,r,z,1,1)) {
          result.push(z, i, r);
          chk = true;
        }
  
        if(chk) break;
      }
    }
    if(chk) break;
  }
  if(chk) break;
}

console.log(result.length === 0 ? 0 : `${result[0]}\n${parseInt(result[1])+1} ${parseInt(result[2])+1}`);

