function solution(name) {
    var answer = 999999999;
    let param = {};
    ["A","B","C","D","E","F","G","H","I","J","K","L","M"].forEach((e,i) => param[e] = i);
    ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].reverse().forEach((e,i) => param[e] = ++i);
    
    let n = name.length;
    let tArr = [
        ...[...name].slice(1).map((cur,idx) => (cur == "A" ? 0 : (n-1-idx)))
        , ...[...name].map((cur,idx) => (cur == "A" ? 0 : (idx)))
    ]

    Array.from({length:n},(v,i) => i).forEach((i)=>{
        let rev = +Math.max(0, ...tArr.slice(i,n));
        let fwd = +Math.max(0, ...tArr.slice(n,i+n));
        answer = Math.min((rev*2)+fwd, (fwd*2)+rev, answer);
    });

    //위아래 이동 최소값 구하기
    answer += [...name].reduce((acc,cur) => acc + param[cur],0);
    return answer;
}