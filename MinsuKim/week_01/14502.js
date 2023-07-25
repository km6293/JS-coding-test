// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let [column, row] = n.split(' ').map(Number);
input = input.map(e => e.split(' ').map(Number));

// 벽을 세울 0을 먼저 찾는다.
// y좌표, x좌표 순서
let zeroList = [];
for(let i = 0; i < column; i++){
  for(let r = 0; r < row; r++){
    if(input[i][r] == 0) zeroList.push([i, r]);
  }
}

// 동 서 남 북
let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];

// 안전 영역
let maxCnt = 0;

// 벽을 3개 세운다.
for(let a = 0; a < zeroList.length-2; a++){
  for(let b = a+1; b < zeroList.length-1; b++){
    for(let c = b+1; c < zeroList.length; c++){
      let wallList = input.map((v) => [...v]);
      wallList[zeroList[a][0]][zeroList[a][1]] = 1
      wallList[zeroList[b][0]][zeroList[b][1]] = 1
      wallList[zeroList[c][0]][zeroList[c][1]] = 1

      // 바이러스 리스트
      let virusList = [];
      for(let i = 0; i < column; i++){
        for(let r = 0; r < row; r++){
          if(wallList[i][r] == 2) virusList.push([i, r]);
        }
      }

      // 바이러스 확산
      while(virusList.length != 0){
        let [cy, cx] = virusList.shift();
        for(let i = 0 ; i < 4; i++){
          let my = cy + dy[i];
          let mx = cx + dx[i];
          if(my >= 0 && my < column && mx >= 0 && mx < row && wallList[my][mx] == 0){
            wallList[my][mx] = 2;
            virusList.push([my, mx]);
          }
        }
      }

      // 안정된 곳 갯수
      let cnt = 0;
      for(let i = 0; i < column; i++){
        for(let r = 0; r < row; r++){
          if(wallList[i][r] == 0) cnt+=1;
        }
      }

      if(maxCnt < cnt) maxCnt = cnt

      wallList[zeroList[c][0]][zeroList[c][1]] = 0
      wallList[zeroList[b][0]][zeroList[b][1]] = 0
      wallList[zeroList[a][0]][zeroList[a][1]] = 0
    }
  }
}

console.log(maxCnt);



