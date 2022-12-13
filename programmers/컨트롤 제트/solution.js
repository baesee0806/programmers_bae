// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    let arr =s.split(' ')
    let answer =0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'Z'){
            answer -= parseInt(arr[i-1])
        }else{
            answer+=parseInt(arr[i])    
        }
        
    }
    return answer
}
