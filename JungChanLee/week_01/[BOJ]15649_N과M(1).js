// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));


let [n,m] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(" ");
let visit = new Array((+n+1)).fill(0);
let dfs = (cur,arr) => {
    if(cur == m) return console.log(arr.join(" "));

    Array.from({length:n},(v,i) => i+1).forEach((val) => {
        visit[val] == 0 && (function(){
            let t = [...arr,val];
            visit[val] = 1;
            dfs(cur+1, t);
            visit[val] = 0;
        })();
    })
}

dfs(0,[]);