let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let returnList = [];

// 단어를 인덱스로 변경
function returnIndexList(input) {
  return input.split('').map(e => alphabet.indexOf(e));
}

list.forEach(e => {
  // 해당 기준점보다 큰 값이 있는지 확인
  let chk = false;
  let indexList = returnIndexList(e.trim());

  for(let i = indexList.length-2; i >= 0; i--){
    let back = [...indexList].slice(i+1);
    if(indexList[i] < Math.max(...back)){
      let center = indexList[i];
      let point = Math.min(...back.filter(e => e > center));

      back.splice(back.indexOf(point), 1);

      let arr = [...indexList.slice(0,i), point, ...[...back, center].sort((a,b) => a-b)];
      let val = arr.map(e => alphabet[e]).join('');
      
      returnList.push(val);
      chk = true;
      break;
    }
  }
  // 없을 경우, 그대로 표출한다.
  if(!chk) returnList.push(e);
})

returnList.forEach(e => console.log(e));

// BEER: 2, 5, 5, 18
// BERE: 2, 5, 18, 5
// BREE: 2, 18, 5, 5
// EBER: 5, 2, 5, 18
// EBRE: 5, 2, 18, 5
// EEBR: 5, 5, 2, 18
// EERB: 5, 5, 18, 2
// ERBE: 5, 18, 2, 5
// EREB: 5, 18, 5, 2
// RBEE: 18, 2, 5, 5
// REBE: 18, 5, 2, 5
// REEB: 18, 5, 5, 2

// HELLO (7, 4, 11, 11, 14) -> HELOL (7, 4, 11, 14, 11)
// DRINK (3, 17, 8, 13, 10) -> DRKIN (3, 17, 10, 8, 13)
// SHUTTLE (18, 7, 20, 19, 19, 11, 4) -> SLEHTTU (18, 11, 4, 7, 19, 19, 20)
// ZOO (25, 14, 14) -> ZOO (25, 14, 14)



