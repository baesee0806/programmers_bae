// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n){
   let num = n.toString().split('')
   let sum = 0;
   for(let i=0;i<num.length;i++){
       sum +=parseInt(num[i])
   }
    return sum

}