// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12918#

function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}