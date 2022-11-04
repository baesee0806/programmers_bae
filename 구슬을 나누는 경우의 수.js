function solution(balls, share) {
    let n = 1;
    let m = 1;
    let t = 1;
    for(let i = 1; i <= balls;i++){
        n *= i
    }
    for(let j = 1; j <= share; j++){
        m *= j
    }
    for (let k = 1;k <= balls-share; k++){
        t *= k
    }
    
    return n/(t*m);
}