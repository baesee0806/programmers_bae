// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  let pFactors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      pFactors = [...pFactors, i];
      n /= i;
    }
  }
  if (n >= 2) pFactors = [...pFactors, n];
  return [...new Set(pFactors)].sort((a, b) => a - b);
}