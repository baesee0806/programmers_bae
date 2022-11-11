// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {

    let m =arr.filter((prev)=>{
        return prev%divisor == 0
    },[]);
    return m.length > 0? m.sort((a,b)=>a-b):[-1];
}