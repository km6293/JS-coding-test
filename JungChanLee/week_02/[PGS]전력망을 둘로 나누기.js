class Queue {
    constructor(){
        this.arr = [];
    }
    add(val){
        this.arr.push(val);
    }
    poll(){
        return this.arr.shift();
    }
    isEmpty(){
        return (this.arr.length == 0);
    }
    peek(){
        return this.arr[0];
    }
}

function solution(n, wires) {
    var answer = n+1;
    let mArr = new Array(n+1).fill(0).map((i) => new Array(n+1).fill(0));
    let visit;

    var bfs = () => {
        let rtnArr = [];
        for(let i = 1 ; i <= n ; i++){
            if(visit[i] == true) continue;
            let cnt = 1;
            let q = new Queue();
            q.add(i);
            visit[i] = true;
            
            while(!q.isEmpty()){
                let obj = q.poll();
                Array.from({length:n},(v,idx) => idx+1).forEach((cur) => {
                    visit[cur] == false && mArr[obj][cur] == 1 && (function(){
                        visit[cur] = true;
                        cnt++;
                        q.add(cur);
                    })();
                });
            }

            rtnArr.push(cnt);
        }

        return rtnArr;
    }

    wires.forEach((data) => {
        mArr[data[0]][data[1]] = 1;
        mArr[data[1]][data[0]] = 1;
    });


    wires.forEach((data) => {
        mArr[data[0]][data[1]] = 0;
        mArr[data[1]][data[0]] = 0;
        visit = new Array(n+1).fill(false);
        let arr = bfs();
        answer = Math.min(Math.abs(arr[0]-arr[1]),answer);
        mArr[data[0]][data[1]] = 1;
        mArr[data[1]][data[0]] = 1;
    })


    return answer;
}