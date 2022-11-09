
//정답을 참고해서 내 생각대로 만든....정답...ㅎㅎ...
function solution(my_str, n) {
    let answer = [];
    for(let i = 0; i< my_str.length/n;i++){
      answer = [...answer,my_str.slice(i*n,n+(i*n))]
    }
    return answer;
}

// 중요한거 
    // 슬라이스를 정확하게 알아야 풀수 있는 문제 였던거 같고
    // slice(start,end)가 기본값인데
    // 이 end에 배열보다 큰 길이가 들어가면 
    // 다동으로 마지막 까지 뽑아주는걸 알아야 편하게 풀수 있는 문제였다