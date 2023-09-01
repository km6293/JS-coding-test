// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));
let [n, input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.split(" ");
n = parseInt(n);
let arrs = new Array(n).fill(0).map(cur => []);
var dfs = (depth,rootIdx,strt,end) => {
    arrs[depth].push(input[rootIdx-1]);
    if(strt == rootIdx || end == rootIdx) return;
    dfs(depth+1,parseInt((strt+rootIdx)/2),strt,rootIdx-1);
    dfs(depth+1,parseInt((rootIdx+end+1)/2),rootIdx+1,end);
};
dfs(0,parseInt((input.length+1)/2),1,input.length)
arrs.forEach(arr => console.log(arr.join(" ")));