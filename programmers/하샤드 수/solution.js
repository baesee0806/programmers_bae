// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let str =x.toString().split('');
    let num = str.reduce((prev,cur)=>{
        return parseInt(prev)+parseInt(cur)        
     },0)
    return  x%num == 0? true:false;
}