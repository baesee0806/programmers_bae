// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120884

//복잡하게 못풀었음...음

// 정답
function solution(chicken) {
  const order = coupons => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
  };
  return order(chicken);
}