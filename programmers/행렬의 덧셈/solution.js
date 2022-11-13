// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}