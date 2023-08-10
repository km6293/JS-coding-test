// let [total, pair, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
let [total, couple, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
total = parseInt(total);

let graph = Array.from({length:total+1}, () => [])
let visited = Array.from({length:total+1}, () => false);
visited[1] = true;
let cnt = 0;

arr.forEach(e => {
  const [a, b] = e.split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
})

function chk(arr){
  arr.forEach(e => {
    if(!visited[e]){
      visited[e] = true;
      cnt += 1;
      chk(graph[e]);
    }
  })
}

chk(graph[1]);
console.log(cnt);

