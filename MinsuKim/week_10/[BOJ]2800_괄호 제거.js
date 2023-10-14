let str = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim();
// let str = require('fs').readFileSync("/dev/stdin").toString().trim();

let brackets = [];
let popList = [];
for(let i = 0 ; i < str.length; i++){
  if(str[i] === '(') popList.push(i);
  else if(str[i] === ')') brackets.push([popList.pop(), i])
}

let numList = Array.from({length:brackets.length}, (_,i) => i);
let results = new Set();

function generateAllCombinations(arr, current = [], index = 0) {
  if (index === arr.length) {
    let value = str.split('');
    current.forEach(e => {
      value[brackets[e][0]] = ''
      value[brackets[e][1]] = ''
    })
    results.add(value.join(''))
    return;
  }

  generateAllCombinations(arr, current, index + 1);
  generateAllCombinations(arr, current.concat(arr[index]), index + 1);
}

generateAllCombinations(numList);

console.log([...results].slice(1, results.size).sort().join('\n'));
