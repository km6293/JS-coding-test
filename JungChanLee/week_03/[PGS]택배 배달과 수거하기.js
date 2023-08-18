function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    let dLast = 0;
    let pLast = 0;
    
    for(let i = 0 ; i < n ; i++){
        if(deliveries[i] > 0) dLast = i
        if(pickups[i] > 0) pLast = i;
    }
    
    while(true){
        if(dLast == 0 && pLast == 0 && deliveries[dLast] == 0 && pickups[pLast] == 0) break;
        
        let dCap = cap;
        let pCap = cap;
        
        if(dLast < pLast) answer += ((pLast+1)*2);
        else answer += ((dLast+1)*2);
        
        for(let i = dLast ; i >= 0 ; i--){
            if(deliveries[i] <= dCap){
                dCap -= deliveries[i];
                deliveries[i] = 0;
                if(i == 0) dLast = 0;
            }else{
                deliveries[i] -= dCap;
                dLast = i;
                break;
            }
        }
        
        for(let i = pLast ; i >= 0 ; i--){
            if(pickups[i] <= pCap){
                pCap -= pickups[i];
                pickups[i] = 0;
                if(i == 0) pLast = 0;
            }else{
                pickups[i] -= pCap;
                pLast = i;
                break;
            }
        }
        
    }
    
    return answer;
}