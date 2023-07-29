function solution(a) {
  let b = a.sort((a,b) => {
    if(a[0] < b[0]){
      return -1;
    }else if(a[0] === b[0]){
      return a[1] < b[1] ? -1 : 1;
    }else{
      return 1;
    }
  })

  let cnt = 1;
  let [s,e] = b.shift();

  b.forEach(r => {
    if(r[0] >= e){
      cnt += 1;
      [s,e] = r;
    }else{
      if(r[0] > s) s = r[0];
      if(r[1] < e) e = r[1];
    }
  })

  return cnt
}