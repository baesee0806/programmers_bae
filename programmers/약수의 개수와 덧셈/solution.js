// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/77884

function divisors(num) {
    let count = 0;
    
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            count++;
        }
    }
    
    return count;
}

function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        let count = divisors(i);          
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }      
    }   
    
    return answer;
}



// left => right 까지 숫자를 뽑아서 
// 하나의 숫자씩 약수의 개숫를 구한다
// 만약에 약수의 갯수가 짝수라면 +  | 홀수라면 -