let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let extensions = {};
let returnList = [];

for(const extension of list){
  let val = extension.trim().split('.')[1]
  extensions[val] = extensions[val] == undefined ? 1 : extensions[val] + 1
}

let keys = Object.keys(extensions).sort();

for(const key of keys){
  returnList.push(`${key} ${extensions[key]}`);
}

console.log(returnList.join('\n'));

