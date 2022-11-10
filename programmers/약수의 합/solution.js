// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
   let max = n;
    let answer =0;
    for(let i=1; i<=n; i++){
       if(max % i == 0){
           answer += i
       }
   }
    return answer
}