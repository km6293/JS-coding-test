// // input.txt 파일에 테스트케이스 작성
// const fs = require('fs'); // 제출시 삭제 
// const path = __dirname + "/../input.txt" // 제출시 삭제 

// const readline = require('readline')
// const rl = readline.createInterface({
// 	// input: process.stdin, // 제출시 활성화  
// 	input: fs.createReadStream(path), // 제출시 삭제 
// 	output: process.stdout,
// })

// let input = []

// rl.on('line', function (line) {
// 	input.push(line)
// }).on('close', function () {

//   class UnionFind {
//     constructor(n) {
//       this.parent = new Array(n).fill(0).map((_, i) => i);
//     }
  
//     getParent(n) {
//       if (this.parent[n] === n) return n;
//       return this.parent[n] = this.getParent(this.parent[n]);
//     }
  
//     union(a, b) {
//       a = this.getParent(a);
//       b = this.getParent(b);
  
//       if (a < b) this.parent[b] = a;
//       else this.parent[a] = b;
//     }
  
//     find(a, b) {
//       a = this.getParent(a);
//       b = this.getParent(b);

//       return a === b;
//     }
//   }
  
//   const [N,M] = input.shift().split(' ').map(Number);
//   const uf = new UnionFind(N);

//   let result = [];

//   for(let i = 0; i < M; i++){
//     const [g, a, b] = input[i].split(' ').map(Number);
//     g ? (result.push(uf.find(a) === uf.find(b) ? 'YES' : 'NO')) : uf.union(a,b);
//   }
//   console.log(result.join('\n'))  

// 	process.exit()
// })



const readline = require('readline');
const input = [];

readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (line) => {
  input.push(line)
}).on('close', () => {
  class UnionFind {
    constructor(n) {
      this.parent = new Array(n).fill(0).map((_, i) => i);
    }
  
    getParent(n) {
      if (this.parent[n] === n) return n;
      return this.parent[n] = this.getParent(this.parent[n]);
    }
  
    union(a, b) {
      a = this.getParent(a);
      b = this.getParent(b);
  
      if (a < b) this.parent[b] = a;
      else this.parent[a] = b;
    }
  
    find(a, b) {
      a = this.getParent(a);
      b = this.getParent(b);

      return a === b;
    }
  }
  
  const [N,M] = input.shift().split(' ').map(Number);
  const uf = new UnionFind(N+1);

  let result = [];

  for(let i = 0; i < M; i++){
    const [g, a, b] = input[i].split(' ').map(Number);
    g ? (result.push(uf.find(a, b) ? 'YES' : 'NO')) : uf.union(a,b);
  }
  console.log(result.join('\n')) 

  process.exit();
});




// let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// // let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// class UnionFind {
//   constructor(n) {
//     this.parent = new Array(n).fill(0).map((_, i) => i);
//   }

//   getParent(n) {
//     if (this.parent[n] === n) return n;
//     return this.parent[n] = this.getParent(this.parent[n]);
//   }

//   union(a, b) {
//     a = this.getParent(a);
//     b = this.getParent(b);

//     if (a < b) this.parent[b] = a;
//     else this.parent[a] = b;
//   }

//   find(a, b) {
//     a = this.getParent(a);
//     b = this.getParent(b);

//     return a === b;
//   }
// }

// const [N,M] = input.shift().split(' ').map(Number);
// const uf = new UnionFind(N+1);

// let result = [];

// for(let i = 0; i < M; i++){
//   const [g, a, b] = input[i].split(' ').map(Number);
//   g ? (result.push(uf.find(a, b) ? 'YES' : 'NO')) : uf.union(a,b);
// }

// console.log(result.join('\n'))

// UnionFind { parent: [ 0, 1, 4, 1, 4, 5, 7, 1 ] }
// UnionFind { parent: [ 0, 1, 2, 1, 2, 5, 1, 6, undefined: 1 ] }