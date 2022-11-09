
//풀었ㄷ아아아아아아!!!!

function solution(cipher, code) {
    let answer = '';
    let co = cipher.split('');
    for(let i = code-1;i < cipher.length;i += code){
        answer += cipher[i]; 
    }
    return answer;
}


