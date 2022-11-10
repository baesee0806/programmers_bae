// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y); i < Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter(v => v > 1).length;
}

//너무 어려운데..?