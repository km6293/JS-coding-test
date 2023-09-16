// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let [ns, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let[n,m,a] = ns.trim().split(" ");
input = input.map(cur => cur.trim().split(" "));

var cycle = (cnt) => {
    let [a,b,c,d] = [[0+cnt,0+cnt],[n-1-cnt,0+cnt],[n-1-cnt,m-1-cnt],[0+cnt,m-1-cnt]];
    let [t1,t2,t3,t4] = [input[a[0]][a[1]+1], input[b[0]-1][b[1]], input[c[0]][c[1]-1] ,input[d[0]+1][d[1]]];
    
    for(let i = b[0]-1 ; i > a[0] ; i--){
        input[i][b[1]] = input[i-1][b[1]];
    }

    for(let i = c[1]-1 ; i > b[1] ; i--){
        input[c[0]][i] = input[c[0]][i-1];
    }

    for(let i = d[0]+1 ; i < c[0] ; i++){
        input[i][d[1]] = input[i+1][d[1]];
    }

    for(let i = a[1]+1 ; i < d[1] ; i++){
        input[a[0]][i] = input[a[0]][i+1];
    }
    input[a[0]][a[1]] = t1;
    input[b[0]][b[1]] = t2;
    input[c[0]][c[1]] = t3;
    input[d[0]][d[1]] = t4;
};

Array.from({length : a},(a,i)=>i).forEach(cur => {
    Array.from({length : (Math.min(n,m)/2)},(acc,idx)=>idx).forEach(cnt => {
        cycle(cnt);
    });
});

input.forEach(cur => console.log(cur.join(" ")));
