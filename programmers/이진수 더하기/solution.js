// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
    var answer = parseInt(bin1,2) + parseInt(bin2,2);
    return answer.toString(2);
}

//parseInt(#,2) 2진수를 숫자로 만들어주고
// .toString(2)는 숫자를 2진수로 만들어준다