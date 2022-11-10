// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  return numlist.sort((a, b) => {
      // sort a,b 를 해서
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
      // 2개의 변수 지정  a-n , a-b 값을 절대값으로 만듬 그리고 변수에 지정
    if (aDiff === bDiff) return b - a;
      // a 랑 b랑 같을경우 b-a 오름 차순으로
    return aDiff - bDiff;
  });
}