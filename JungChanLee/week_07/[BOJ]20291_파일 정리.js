// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim());

let solve = () => {

    let sortArr = new Array();
    let dupleMap = new Map();
    let answer = "";

    input.forEach(str => {
        let tStr = str.split(".")[1];
        dupleMap.has(tStr) 
        ? dupleMap.set(tStr,(dupleMap.get(tStr)+1))
        : (function(){
            dupleMap.set(tStr,1);
            sortArr.push(tStr);
        })();
    })
    sortArr.sort();
    sortArr.forEach(cur => {
        answer += cur + " " + dupleMap.get(cur)+"\n";
    })
    console.log(answer.trim());
}

solve();