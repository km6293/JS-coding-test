const arr = new Array(3).fill([]); 
console.log(arr)
let b = arr.map(e => e);
b[0].push(1);
console.log(b)

let test = Array.from([1,2,3'], (e) => {[]});
// test[0].push(1);
console.log(test)