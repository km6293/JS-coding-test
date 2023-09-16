// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));
let [ns, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim()).map(cur => [...cur]);
var moveDown = (x,cnt) => {
    for(let i = x ; i >= 0 ; i--){
        input[i].forEach((val,col) => {
            if(input[i][col] == 'X'){
                input[i+cnt][col] = 'X';
                input[i][col] = '.';
            }
        });
    }
};

let arr = Array.from({length:input[0].length},(a,i) => i).map(cur => {
    let rtnVal = -1;
    let minLand = input.length;
    for(let i = input.length-1 ; i >= 0 ; i--){
        if(input[i][cur] == 'X'){
            rtnVal = i;
            break;
        }
    }
    for(let i = input.length-1 ; i >= 0 ; i--){
        if(input[i][cur] == '#'){
            minLand = i;
        }
    }
    return [rtnVal,minLand];
});

let cnt = Math.min(...arr.map(cur => {
    if(cur[0] == -1) return 5000;
    return (cur[1]-cur[0]-1);
}));
let max = Math.max(...arr.map(cur => cur[0]));
moveDown(max,cnt);
input.forEach(cur => console.log(cur.join("")));

