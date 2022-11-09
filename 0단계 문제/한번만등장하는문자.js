// 진짜 모르겠음....
//정답
function solution(s) {
    let answer ='';
    s=[...s].sort();
    for(let i=0;i<s.length;i++){
        if(s[i]!==s[i-1] && s[i]!==s[i+1]){
            answer +=s[i];
        }
    }
    return answer;
}


// 일단 sort 해서 a-z 순으로 만들고 
// 0 -1 && 0 1 번째가 같지 않다면 
// answer에 s[i]를 더해준다


// 간단하면서도 어려운 문제였던거 같다... 다시 자바스크립트 봐야할거 같은 생각이 많이든다.
