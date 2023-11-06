let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let truth = input[0].split(" ").map(cur => parseInt(cur));
let m = new Map();
if(truth[0] != 0){
    for(let i = 1 ; i < truth.length ; i++){
        m.set(truth[i],true);
    }
}

var solve = () => {
    while(true){
        let preSize = m.size;
        for(let i = 1 ; i < input.length ; i++){
            let temp = input[i].split(" ").map(cur => parseInt(cur));
            for(let j = 1; j < temp.length ; j++){
                if(m.has(temp[j])){
                    temp.forEach((num,idx) => {
                        if(idx != 0) m.set(num,true);
                    });
                    break;
                }
            }
        }
        if(preSize == m.size) break;
    }

    let answer = 0;

    for(let i = 1 ; i < input.length ; i++){
        let temp = input[i].split(" ").map(cur => parseInt(cur));
        let flag = true;
        for(let j = 1; j < temp.length ; j++){
            if(m.has(temp[j])){
                flag = false;
                break;
            }
        }

        if(flag == true) answer++;
    }
    console.log(answer);
}

solve();



