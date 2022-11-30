// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let arr =[];
    let str =n.toString(3);
    for(let i = 0; i<str.length;i++){
        arr.push(str[i])
    }
    let answer =parseInt(arr.reverse().join(''),3)
    return answer
}