// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
    let sum = numbers.reduce((prev,cur)=>{
        return prev+cur
    },0)
    return sum/numbers.length
}