let [n,m, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let p = new Array(parseInt(n)).fill(0).map((cur,idx) => idx);
input = input.map(cur => cur.trim());
let arr = input[input.length-1].split(" ").map(cur => parseInt(cur));
var getParent = (num) => {
    if(p[num] == num) return num;
    else return p[num] = getParent(p[num]);
}

var union = (num1,num2) => {
    let p1 = getParent(num1);
    let p2 = getParent(num2);
    if(p1 == p2) return;
    else if(p1 > p2) p[p1] = p2;
    else p[p2] = p1;
}

var findUnion = (num1, num2) => {
    let p1 = getParent(num1);
    let p2 = getParent(num2);
    return (p1 == p2) ? true : false;
};

var solve = () => {
    let answer = "YES";
    input.forEach((cur,i) => {
        if(i < input.length-1){
            cur.split(" ").map(n => parseInt(n)).forEach((n,j) => {
                if(n == 1) union(i,j);
            })
        }
    });
    for(let i = 0 ; i < arr.length-1 ; i++){
        let num1 = arr[i]-1;
        let num2 = arr[i+1]-1;
        if(!findUnion(num1,num2)){
            answer = "NO";
            break;
        }
    }
    console.log(answer);
}

solve();



