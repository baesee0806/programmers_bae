// 조금 참조 하고 풀음



//정답
function solution(i, j, k) {
    let count ='';
    let answer=[];
    for(i;i<=j;i++){
        count += i
    }
    count.split('')
    for(let num = 0; num < count.length;num++){
        answer.push(count[num])
    }
    
    return answer.filter(el => k == el).length;
}



// 숫자를 문자열로 문자열을 스플릿하고 하나씩 배열로 
// 이 배열을 k와 같다면 el에 넣어라 그리고 그length 값을 출력 하면 k의 개수 나옴