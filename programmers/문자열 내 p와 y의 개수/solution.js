// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;
    let pP=[]
    let yY=[]
    let c =[]
    for(let i =0;i<s.length;i++){
    if(s[i].charCodeAt() == 80 || s[i].charCodeAt() ==112){
        pP.push(s[i])
    }else if(s[i].charCodeAt() == 89||s[i].charCodeAt() ==121){
        yY.push(s[i])
    }
    }

    return pP.length == yY.length || pP.length+yY.length==0? true : false ;
}