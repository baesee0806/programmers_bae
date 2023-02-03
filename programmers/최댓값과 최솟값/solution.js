// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    const toNumbers = arr => arr.map(Number);
    let answer = [Math.min(...toNumbers(s.split(' '))),Math.max(...toNumbers(s.split(' ')))];
    return answer.join(' ')
}