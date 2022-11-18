// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
    let sum = 0;
    let array = n.toString().split("");
        
    
    
    return array.reduce((a,b)=>{
        return parseInt(a) + parseInt(b)
    },0);
}