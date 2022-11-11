// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    var answer = [];
    let num = n.toString().split('')
    for(let i =0; i< num.length;i++){
        answer.push(parseInt(num[i]))
    }
    return answer.reverse();
}