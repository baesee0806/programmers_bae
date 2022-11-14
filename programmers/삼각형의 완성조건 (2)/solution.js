// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  const min = Math.min(...sides);
  const max1 = Math.max(...sides);
  const max2 = min + max1 - 1;
  return max2 - (max1 - min);
}