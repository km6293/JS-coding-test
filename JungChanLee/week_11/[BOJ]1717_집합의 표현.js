// 원인을 알수없는 런타임 에러 때문에 질문게시판 참고후 구글링해서 read 방식 변경함

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});
let input =[];
rl.on("line", function(line){
    input.push(line);
}).on("close", function(){


    let [n,m] = [...input.shift().split(" ")];
    let p = new Array(parseInt(n)+1).fill(0).map((cur,idx) => idx);

    var getParent = (num) => {
        if(p[num] == num) return num;
        else return p[num] = getParent(p[num]);
    };

    var union = (n1, n2) => {
        let p1 = getParent(n1);
        let p2 = getParent(n2);
        (p1 != p2) && (p1 > p2 ? (p[p1] = p2) : (p[p2] = p1));
    }

    var findUnion = (n1, n2) => {
        let p1 = getParent(n1);
        let p2 = getParent(n2);
        return (p1 == p2) ? true : false;
    };``

    let ansArr = [];
    input.map(cur => cur.trim()).forEach(cur => {
        let t = cur.split(" ").map(c => parseInt(c));
        t[0] == 0 ? union(t[1],t[2]) : ansArr.push(findUnion(t[1],t[2]) ? "YES" : "NO");
    });

    console.log(ansArr.join("\n"));
    process.exit();
});