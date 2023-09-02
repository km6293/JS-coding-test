// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));
const dx = [0,1,1,-1];
const dy = [1,1,0,1];
let win = 0;
let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.split(" ").map(str => parseInt(str.trim())));

var dfs = (num,r,c,direct,count) => {
    if(r == -1 || r == 19 || c == -1 || c == 19 || input[r][c] != num){
        if(count == 5) win = num;
        return;
    }
    dfs(num,r+dx[direct],c+dy[direct],direct,count+1);
};
var solve = () => {
    for(let i = 0 ; i < 19 ; i++){
        for(let j = 0 ; j < 19 ; j++){
            if(input[i][j] != 0){
                for(let k = 0 ; k < 4 ; k++){
                    let px = i-dx[k];
                    let py = j-dy[k];
                    if(px >= 0 && py >= 0 && px < 19 && py < 19){
                        if(input[px][py] == input[i][j]) continue;
                    }
                    
                    dfs(input[i][j], i, j , k ,0);
                    if(win != 0){
                        console.log(win +"\n" + (i+1) + " " + (j+1));
                        return;
                    }
                }
            }
        }
    }
    console.log(0);
}

solve();