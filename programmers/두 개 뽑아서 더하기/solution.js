// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let arr = []
    for(let i =0;i<numbers.length;i++){
        for(let j = i+1;j<numbers.length;j++){
            arr.push(numbers[i]+numbers[j])
        }
    }
    let answer = [...new Set(arr)]
    return answer.sort((a,b)=>a-b)
}