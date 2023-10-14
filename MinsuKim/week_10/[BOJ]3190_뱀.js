let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input.shift());
let gameList = Array.from({length: N}, () => Array.from({length: N}, () => 'x'));
gameList[0][0] = 's';
let directList = [];

let a = parseInt(input.shift());
for(let i = 0; i < a; i++){
  let [x, y] = input[i].split(' ').map(Number);
  gameList[x-1][y-1] = 'a';
}
for(let i = a + 1 ; i < input.length; i++) {
  let [second, directionValue] = input[i].split(' ');
  directList.push([parseInt(second), directionValue])
}

let dx = [1,0,-1,0];
let dy = [0,1,0,-1];
let direction = 0;
let time = 0;
let snake = [[0,0]];
let head = [0,0];

while(true){
  // 방향 전환
  if(directList.length > 0 && directList[0][0] === time){
    let [_, directionValue] = directList.shift();
    direction = directionValue === 'D' ? direction + 1 : direction -1;
    if(direction === -1) direction = 3;
    else if(direction === 4) direction = 0;
  }
  
  head[0] += dx[direction]
  head[1] += dy[direction]
  
  let [x, y] = head;

  if(x < 0 || y < 0 || x > N-1 || y > N-1 || gameList[y][x] === 's') break;

  if(gameList[y][x] === 'x'){
    let [dx, dy] = snake.pop();
    gameList[dx][dy] = 'x';
  }

  snake.unshift([y,x])
  gameList[y][x] = 's';

  time += 1;
}

console.log(time+1);






