function solution(m, n, board) {
  function del(arr) {
    let cArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let r = 0; r < arr[0].length - 1; r++) {
        if (
          arr[i][r] === arr[i][r + 1] &&
          arr[i + 1][r] === arr[i + 1][r + 1] &&
          arr[i][r] === arr[i + 1][r] &&
          arr[i][r] !== "X"
        ) {
          cArr.push([i, r]);
          cArr.push([i, r + 1]);
          cArr.push([i + 1, r]);
          cArr.push([i + 1, r + 1]);
        }
      }
    }
    return cArr;
  }

  function summarizing(arr) {
    for (const [row, col] of arr) {
      board[row] = board[row].substring(0, col) + "X" + board[row].substring(col + 1);
    }
  }

  let cnt = 0;

  while (true) {
    const cArr = del(board);
    if (cArr.length === 0) break;

    const uniqueSet = new Set(cArr.map((e) => e.join(",")));
    cnt += uniqueSet.size;

    summarizing(cArr);
    
    // 지워진 블록을 빈 공간으로 떨어뜨리기
    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "X") {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j] !== "X") {
              board[i] = board[i].substring(0, j) + board[k][j] + board[i].substring(j + 1);
              board[k] = board[k].substring(0, j) + "X" + board[k].substring(j + 1);
              break;
            }
          }
        }
      }
    }
  }

  return cnt;
}

console.log(
  solution(6, 6, [
    "TTTANT",
    "RRFACC",
    "RRRFCC",
    "TRRRAA",
    "TTMMMF",
    "TMMTTJ",
  ])
); // Output: 15
