// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    let oneNum = n.toString(2).split("1").length;
    while (true) {
      n++;
      if (n.toString(2).split("1").length === oneNum) return n;
    }
  }