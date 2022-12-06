// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
   let min = arr.filter(el=> el !== Math.min(...arr))
   if(min.length > 0){
       return min
   }else{return [-1]}
}