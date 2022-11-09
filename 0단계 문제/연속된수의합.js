//내정답
// 1차 못풀음

//정답
function solution(num, total) {
    let x = ((2*total/num)+1-num)/2
    let answer=[];
    for(let i = 0; i<num;i++){
        answer.push(x+i)
    }
    return answer;
}

// 코드 뜯어보기

// total에 2를 곱하고 num으로 나눈다 1번

// 이수를 1을 더하고 num을 뺴준다   2번

// 이수를 2로 나눈다      3번
// 1 2 3번이 연속되는 숫자의 가장 작은값을 구하는 식인거 같다




// num의 숫자만큼 반복 하면서
// answer 빈배열에 x+i를 해준다