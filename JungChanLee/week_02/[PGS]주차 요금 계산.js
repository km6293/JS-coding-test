function solution(fees, records) {
    var getTime = (strt,end) => {
        let rtnVal;
        strt = strt.split(":").map((val) => parseInt(val));
        end = end.split(":").map((val) => parseInt(val));
        if(end[1] < strt[1]) end[0] -= 1;
        if(end[1] < strt[1]) rtnVal = (60+end[1] - strt[1]);
        else rtnVal = (end[1] - strt[1]);
        return rtnVal + ((end[0]-strt[0])*60);
    }
    
    let param = {};
    let numb = [];
    
    //parsing
    records.forEach((val,i) => {
        let tArr = val.split(" ");
        if(param[tArr[1]] == undefined){
            param[tArr[1]] = [];
        }
        param[tArr[1]].push(tArr[0]);
        numb.push(tArr[1]);
    });
    var answer = [];
    let cars = numb.filter((val,i) => numb.indexOf(val) === i).sort((a,b) => a-b);
    cars.forEach((val) => {
        let t = param[val];
        let total = 0;
        if(t.length % 2 != 0) t.push("23:59");
        for(let i = 0 ; i < t.length ; i = i+2){
            total += getTime(t[i],t[i+1]);
        }
        let sum = 0;
        
        total = Math.max((total-fees[0]),0);
        sum = fees[1]; // 기본요금 계산
        total = Math.ceil(total/fees[2]);
        sum += total*fees[3];
        answer.push(sum);
    });
    return answer;
}