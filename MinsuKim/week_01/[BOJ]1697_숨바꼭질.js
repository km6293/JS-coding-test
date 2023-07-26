let [a,b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// let [a,b] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(" ").map(Number);

if(a >= b){
  console.log(a - b);
}else{
  // b+1이 짝수일 경우 /2 할 수 있음.
  let arr = new Array(b+2).fill(Infinity);
  
  let list = [a];
  arr[a] = 0;
  
  while(arr[b] === Infinity){
    let num = list.shift();

    if(arr[num-1] > arr[num]+1) {
      list.push(num-1);
      arr[num-1] = arr[num]+1;
    }
    if(arr[num+1] > arr[num]+1) {
      list.push(num+1);
      arr[num+1] = arr[num]+1;
    }
    if(arr[num*2] > arr[num]+1) {
      list.push(num*2);
      arr[num*2] = arr[num]+1;
    }
  }  
  console.log(arr[b])
}