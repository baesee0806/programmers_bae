// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    let num =Math.floor(s.length /2)-1;
    let num2 =Math.floor(s.length /2)
    let answer = '';
    if(s.length %2 == 0){
         answer += s[num]
         answer += s[num+1]
        return answer
    }else{
        return s[num2]
    }

}