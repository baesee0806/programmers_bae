// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
    var answer = 0;
    let str = my_string.replace(/[a-zA-Z]/g,'-').split("-");
    for(let i=0;i<str.length;i++){
        if(str[i]!=''){
            answer += parseInt(str[i])
        }
    }
    return answer ;
}