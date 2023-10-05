let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

class Queue{
  constructor(list){
    this.queue = list;
    this.front = 0;
    this.rear = list.length;
    // true = 앞
    // false = 뒤
    this.state = true;
    this.isError = false;
  }

  change(gubun){
    if(this.front > this.rear) this.isError = true;
    if(this.rear - this.front === 0 && gubun === 'D') this.isError = true;

    if(gubun === 'R'){
      this.state = !this.state;
    }else{
      this.state ? this.front += 1 : this.rear -=1;
    }
  }
}

const N = input.shift();
let [order, list] = [[],[]];

input.forEach(e => {
  let value = e.trim();
  if(value[0] === 'R' || value[0] === 'D') order.push(value);
  if(value[0] === '[') list.push(JSON.parse(value));
});

let results = [];
list.forEach((e,i) => {

  let queue = new Queue(e);
  for(let j = 0 ; j < order[i].length; j++){
    queue.change(order[i][j]);
    if(queue.isError) break;
  }

  if(queue.isError){
    results.push('error');
  }else{
    let value = queue.queue.slice(queue.front, queue.rear);
    if(!queue.state) value = value.reverse();
    results.push(JSON.stringify(value));
  }
})

results.forEach(e => {
  console.log(e);
})


