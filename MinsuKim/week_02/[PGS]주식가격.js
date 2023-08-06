// function solution(prices) {
//   let arr = [];
//   let cArr = [...prices];
//   let cnt = prices.length
//   while(cnt != 0){
//       let nArr = prices.slice(cnt);
//       let val = cArr.pop();
//       let chk = nArr.findIndex(e => e < val);
//       arr.push(chk == -1 ? arr.length : chk+1)
//       cnt -= 1;
//   }
//   return arr.reverse()
// }

function solution(prices) {
  let arr = [];
  for(let i = 0; i < prices.length-1; i++){
    let cnt = 1;
    for(let r = i+1; r < prices.length -1; r++){
      if(prices[i] <= prices[r]){
        cnt += 1;
      }else{
        break;
      }
    }
    arr.push(cnt);
  }
  return [...arr, 0];
}

console.log(solution([1, 2, 3, 2, 3, 1]) ,[5, 4, 1, 2, 1, 0])
// [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]

// console.log([1, 2, 3, 2, 3, 1].slice(0))

