// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));


let [str] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
str = [...str].sort();

var solve = (str) => {
    let oddCount = 0;
    let oddChar = undefined;
    let param = {};
    let answer = [];
    let duple = new Map();
    str.forEach(cur => param[cur] == undefined ? (param[cur] = 1) : (param[cur] = param[cur]+1));
    str.forEach(cur => {
        if(!duple.has(cur) && param[cur]%2 == 1){
            duple.set(cur);
            oddCount++;
            oddChar = cur;
        }
    });

    if(oddCount > 1){
        console.log("I'm Sorry Hansoo");
        return;
    }

    str.forEach(cur => {
        while(true){
            if(param[cur] <= 1) break;
            answer.push(cur);
            param[cur] = param[cur]-2;
        }
    });

    str = answer.join("");
    if(oddChar != undefined) str += oddChar;
    str += answer.reverse().join("");
    console.log(str);
};

solve(str);