//  내생각
// 배열로 만들어서 배열의 끝을 뺴서 앞에다가 넣는 코드를 반복문을 돌려서 
// 같아질떄까지 돌리고 count라는 변수를 만들어서 한번 돌떄마다 count++ 해주면서 
// 얼마나 이동했는가를 알려고 했음

// 그리고 계속 반복했을때에 같아지지 않으면 return -1 ;을 리턴 할려고 했다...

// 하지만 정답을 보면 단순 문자열 가지고 풀수있는 문제였다...


//정답
function solution(A, B) {
    if (A===B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A.slice(-1) + A.slice(0,-1);
        if (A === B) return i+1;
    }
    return -1;
}