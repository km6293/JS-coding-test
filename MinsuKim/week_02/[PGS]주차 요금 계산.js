function solution(fees, records) {

  // 현재 번호, 번호에 따른 총 시간 List
  let totalList = [];  

  // IN, OUT 체크하기 위한 List
  // 다 돌린 후, 남아있을 경우 23:59분도 처리하기 위함.
  let chkList = [];

  records.forEach(e => {

    let [time, number, chk] = e.split(' ');
    time = time.split(':').map(Number);
    time = (time[0] * 60) + time[1];
    let totalIndex = -1;
    for(let i = 0; i < totalList.length; i++){
      if(totalList[i][0] == number){
        totalIndex = i;
        break;
      }
    }

    if(chk === 'IN'){
      chkList.push([number, time]);

      // 해당 값이 totalList에 없을 경우
      if(totalIndex == -1) totalList.push([number,0]);
    }else{
      let chkIndex = -1;
      for(let r = 0 ; r < chkList.length; r++){
        if(chkList[r][0] == number){
          chkIndex = r;
          break;
        }
      }
      totalList[totalIndex][1] += time - chkList[chkIndex][1];
      chkList.splice(chkIndex,1);
    }
  })

  // 남아있는 IN 값 23:59분 처리
  chkList.forEach(e => {
    let totalIndex = -1;
    for(let i = 0; i < totalList.length; i++){
      if(totalList[i][0] == e[0]){
        totalIndex = i;
        break;
      }
    }
    totalList[totalIndex][1] += ((23 * 60) + 59) - e[1];
  })

  // 정렬
  totalList.sort((a, b) => a[0].localeCompare(b[0]));

  let [defaultTime, defaultMoney, unitTime, unitMoney] = fees;
  return totalList.map(e => {
    let pay = 0;
    if(defaultTime >= e[1]){
      pay = defaultMoney
    }else{
      let restTime = e[1] - defaultTime;
      pay = defaultMoney + (Math.ceil(restTime / unitTime) * unitMoney)
    }
    return pay
  })
}

// console.log(solution([180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]), [14600, 34400, 5000])
// console.log(solution([120, 0, 60, 591],["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]), [0, 591])
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]	), [14841])
