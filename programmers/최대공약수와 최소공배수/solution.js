// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

function solution(n, m) {
    let answer = []
    
    let num0 = 0
    let num1 = 0
    
    let nums = n>m?n:m
    
    for(let i =1;i<=n;i++){
        if(n%i===0&&m%i===0){
            num0 = i
        }
    }
    num1 = n*m/num0
    answer = [num0,num1]
    return answer;
}

