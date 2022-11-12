// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    let arr = [];
    for(let i=0;i < s.length;i++){
        arr.push(s[i])
    }
    
    return arr.sort().reverse().join("");
}