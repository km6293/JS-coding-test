// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim());
n = parseInt(n.split(" "));
let arr = new Array(n).fill("00000000000000000000");
let simulate = (order) => {
    
    let commends = order.split(" ");
    let trainIdx = parseInt(commends[1])-1;
    let seatIdx = parseInt(commends[2])-1;
    let tArr = [...arr[trainIdx]];

    commends[0] == "1" ? tArr.splice(seatIdx,1,"1")
    : commends[0] == "2" ? tArr.splice(seatIdx,1,"0")
    : commends[0] == "3" ? tArr = ["0",...tArr].slice(0,20)
    : tArr = [...tArr,"0"].slice(1);

    arr[trainIdx] = tArr.join("");
}

Array.from({length : input.length} , (a,i) => i).forEach(idx => simulate(input[idx]));
let duple = new Map();
arr.forEach(cur => duple.set(cur));
console.log(duple.size);