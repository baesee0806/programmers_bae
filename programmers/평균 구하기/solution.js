// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((perv,cur)=>{
        return perv+= cur
    },0)
    return sum/arr.length;
}