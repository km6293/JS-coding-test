function solution(targets) {
    targets.sort(function(a,b){
        if(a[0] > b[0]) return 1;
        else return -1;
    })
    let end = -1;
    return targets.reduce((acc,cur) => {
        if(cur[0] >= end){
            end = cur[1];
            return (acc+1);
        }
        end = Math.min(end,cur[1]);
        return acc;
    },0);
}