// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    var answer = [0,0];

    while (s !== '1') {
        answer[0] += 1;
        answer[1] += (s.match(/0/g) || []).length;
        s = s.match(/1/g).length.toString(2);
    }
    return answer;
}