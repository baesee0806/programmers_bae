// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
   let snum = phone_number.slice(0,phone_number.length-4);
    let answer =''
    for(let i=0;i < snum.length;i++){
        answer += '*'
    }
    return answer + phone_number.slice(phone_number.length-4)
}