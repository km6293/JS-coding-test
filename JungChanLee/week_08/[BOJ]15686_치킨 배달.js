// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));


let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim()).map(cur => cur.split(" "));

let m = n.split(" ")[1];
let chickens = [];
let houses = [];
let answer = 1000000000;

var dfs = (idx,arr) => {
    if(idx > chickens.length) return;
    if(arr.length == m){
        let distance = 0;
        houses.forEach(cur => {
            let t = 100000000;
            arr.forEach(chickIdx => t = Math.min(Math.abs(chickens[chickIdx][0] - cur[0]) + Math.abs(chickens[chickIdx][1] - cur[1]),t));
            distance += t;
        });
        answer = Math.min(answer,distance);
        return;
    }

    let tArr =  [...arr];
    tArr.push(idx);

    //현재꺼 선택
    dfs(idx+1, tArr);
    //현재꺼 선택안함
    dfs(idx+1,arr);

};

input.forEach((row,rIdx) => {
    row.forEach((col,cIdx) =>{
        if(col == "1") houses.push([rIdx,cIdx]);
        if(col == "2") chickens.push([rIdx,cIdx]);
    });
});

dfs(0,[]);
console.log(answer);
