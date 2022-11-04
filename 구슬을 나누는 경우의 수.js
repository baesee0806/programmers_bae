// 테스트 케이스에서 오류가 남

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

// 이유를 생각하니까 balls 와 share가 같은경우는 balls를 출력 하면 됨
//그런데 그렇게 했는데도 오답이 나옴



//정답
function solution(balls, share) {
    var answer = factorial(balls) / (factorial(balls-share) * factorial(share));
    return answer;
}
function factorial(num) {
    let ret = BigInt(1);
    for(let i=2; i<=num ; i++){
        ret *= BigInt(i);
    }
    return ret;
}

//BigInt가 핵심인데
//BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형입니다.
// 정수 리터럴 끝에 n을 붙이거나 함수 BigInt를 호출하면 문자열이나 숫자를 가지고 BigInt 타입의 값을 만들 수 있습니다.

//숫자가 거대해 질때의 경우를 생각을 못했던거 같다