function solution(name) {
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let val = 999;
  
  // 위아래 최솟값 구하기
  function findMinIndex(y){
      let index = alphabet.indexOf(y);
      return index > 13 ? 26 - index : index;
  }
  
  // 좌우 최솟값 구하기
  function bfs(arr, now, cnt){
    let nArr = [...arr];
    nArr[now] = 0;
    if(cnt > name.length || nArr.indexOf(1) === -1){
      if(val > cnt) val = cnt;
    }else{
        bfs(nArr, now === 0 ? nArr.length-1 : now-1, cnt+1);
        bfs(nArr, now === name.length-1 ? 0 : now+1, cnt+1);
    }
  }
  
  let chkArr = [...name].map(e => e === 'A' ? 0 : 1);  
  bfs(chkArr, 0, 0);

  let total = 0;
  for(let i = 0; i < name.length; i++){
    if(name[i] !== 'A'){
      total+= findMinIndex(name[i])
    }
  }

  return(total + val)
}

solution(	"BBBAAAAAAAB")