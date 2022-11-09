// 못풀었음....

//정답
function solution(n) {
    let sum = 1;
    for(let i = 1; i <= 10; i++){
        sum *= i;
        if(n === sum) return i;
        if(n < sum) return i - 1;
    }
}

//코드 뜯어보기

 

