// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));
let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => cur.trim());
let shortCut = [];
let reMakeStr = (sCut,strArr,strIdx,cIdx) => {
    strArr[strIdx] = [...strArr[strIdx]].map((cur,idx) => idx == cIdx ?  ["[",cur,"]"].join("") : cur).join("");
    shortCut.push(sCut);
    //출력
    console.log(strArr.join(" "));
};
input.forEach(strs => {
    let flag = false;
    let strArr = strs.split(" ");

    for(let i = 0, cnt = strArr.length ; i < cnt ; i++){
        let sCut = [...strArr[i]][0].toUpperCase();
        if(shortCut.indexOf(sCut) < 0){
            flag = true;
            reMakeStr(sCut,strArr,i,0);
            break;
        }
    }

    flag == false && (function(){
        for(let i = 0, cnt = strArr.length ; i < cnt ; i++){
            for(let j = 0 , nCnt = strArr[i].length ; j < nCnt ; j++){
                let sCut = [...strArr[i]][j].toUpperCase();
                if(shortCut.indexOf(sCut) < 0){
                    flag = true;
                    reMakeStr(sCut,strArr,i,j);
                    break;
                }
            }
            if(flag == true) break;
        }
    })();

    flag == false && console.log(strArr.join(" "));
});
