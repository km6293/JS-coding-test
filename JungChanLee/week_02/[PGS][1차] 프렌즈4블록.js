function solution(m, n, board) {
    var answer = 0;
    var moveDown = () => {
        let arr = [];
        Array.from({length:n},(b,j) => j).forEach( j => {
            let tArr = []; 
            Array.from({length:m},(a,i) => i).reverse().forEach(i => {
                if(board[i][j] != 1) tArr.push(board[i][j]);
            });
            arr.push(tArr);
        });
        board = new Array(m).fill(1).map(i => new Array(n).fill(1));
        arr.forEach((valArr,i) => {
            let idx = m-1;
            valArr.forEach((val) => {
                board[idx][i] = val;
                idx--;
            });
        });
    }
    var solve = () => {
        let visit = new Array(m).fill(false).map(i => new Array(n).fill(false));
        let dx = [1,0,1];
        let dy = [0,1,1];
        let num = 0;
        
        Array.from({length:m},(a,i) => i).forEach(i => {
            Array.from({length:n},(b,j) => j).forEach( j => {
                if(board[i][j] != 1){
                    let c = board[i][j];
                    let flag = true;
                    dx.forEach((val,idx) => {
                        let nx = i + dx[idx];
                        let ny = j + dy[idx];
                        if(nx < 0 || ny < 0 || nx >= m || ny >= n) flag = false;
                        else{
                            if(board[nx][ny] != c) flag = false;
                        }
                    });
                    if(flag == true){
                        dx.forEach((val,idx) => {
                            let nx = i + dx[idx];
                            let ny = j + dy[idx];
                            visit[nx][ny] = true;
                        });
                        visit[i][j] = true;
                    }
                }
            });
        })
        Array.from({length:m},(a,i) => i).forEach(i => {
            Array.from({length:n},(b,j) => j).forEach( j => {
                
                if(visit[i][j] == true){
                    board[i][j] = 1;
                    num++;
                }
            });
        });
        return num;
    }

    board = board.map(v => [...v].map(val => val))
    while(true){
        let cnt = solve();
        if(cnt == 0)
            break;
        answer += cnt;
        moveDown();
    }

    return answer;
}