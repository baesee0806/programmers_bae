// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = -1;
    
    let num =numbers.reduce((prev,cur)=>{
        return prev+cur
    },0)
    return 45-num;
}