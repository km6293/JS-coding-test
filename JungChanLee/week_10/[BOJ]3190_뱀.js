// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let dx = [0,-1,0,1];
let dy = [1,0,-1,0];
let [n,k, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
n = parseInt(n), k = parseInt(k);
let map = new Array(n).fill(0).map(cur => new Array(n).fill(0));
for(let i = 0 ; i < k ; i++){
    let apple = input[i].trim().split(" ");
    map[apple[0]-1][apple[1]-1] = 1;
}
input = input.slice(k+1).map(cur => cur.trim());
map[0][0] = 2;

var solve = () => {
    let tailDir = 0, tailCnt = 0, tailIdx = 0, tailMap = [0,0];
    let headDir = 0, headCnt = 0, headIdx = 0, headMap = [0,0];
    let cnt = 0;
    while(true){
        cnt++;
        headCnt++;
        let nx = headMap[0] + dx[headDir];
        let ny = headMap[1] + dy[headDir];
        if(nx < 0 || nx >= n || ny < 0 || ny >=n) break;
        if(map[nx][ny] == 2) break;

        let appleYn = map[nx][ny] == 1 ? 1 : 0;

        map[nx][ny] = 2;
        headMap = [nx,ny];
        let t = headIdx >= input.length ? [-1,-1] : input[headIdx].split(" ");
        if(parseInt(t[0]) == headCnt){
            headIdx++;
            if(t[1] == "L") ((headDir+1) > 3 ? headDir = 0 : headDir++);
            else (headDir-1) < 0 ? headDir = 3 : headDir--;
        }

        //사과가 아닌경우
        if(appleYn == 0){
            tailCnt++;
            map[tailMap[0]][tailMap[1]] = 0;
            nx = tailMap[0] + dx[tailDir];
            ny = tailMap[1] + dy[tailDir];
            tailMap = [nx,ny];

            t = tailIdx >= input.length ? [-1,-1] : input[tailIdx].split(" ");
            if(parseInt(t[0]) == tailCnt){
                tailIdx++;
                if(t[1] == "L") ((tailDir+1) > 3 ? tailDir = 0 : tailDir++);
                else (tailDir-1) < 0 ? tailDir = 3 : tailDir--;
            }
        }
    }
    console.log(cnt);
}
solve();