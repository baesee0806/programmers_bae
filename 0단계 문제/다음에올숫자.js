// 내풀이
    // 1차 못풀음

//정답
function solution(common) {
    // 등차수열인지 확인
    const sameMinus = common[1]-common[0] === common[2]-common[1]
    if(sameMinus) {
        return common[common.length-1]+common[1]-common[0]
    } else {
        return common[common.length-1]*(common[1]/common[0])
    }
}


// 코드 뜯어보기
    // 일단 등차 수열과 등비 수열의 차이를 알아야 한다

    // 등차는 일정하게 +해지는 수
    // ex) 1 2 3 4 5 1씩 커지는 수 is 등차

    // 등비는 일정하게 *해지는 수
    // ex 2 4 8 16  2씩 곱해지는 수 is 등비

    // 1번
    // 먼저 등차인지 알수있는것은 앞에 두수의 뺄셈과
    // 뒤에 두수의 뺄셈을 해서 같은지를 확인
    // 2번
    // 만약에 같다면 
    // 전체 배열의 끝에서 일정하게 더해지는 수를 더한다 
    // 3번
    // 아니면 
    // 전체 배열의 끝애서 일정하게 곱해지는 수를 곱한다