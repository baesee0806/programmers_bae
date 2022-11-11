// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
let num =n.toString().split('').sort((a,b)=>b-a)
let answer = num.reduce((prev,cur)=>{
    return prev+=cur
},'')
    return parseInt(answer);
}