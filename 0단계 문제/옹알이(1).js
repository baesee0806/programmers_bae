// 내풀이1차 못풀음!

//정답
function solution(babbling) {

    var babblingArr = ["aya", "ye", "woo", "ma"];
    var word = "";
    var answer = 0;

    for(var i=0; i<babbling.length; i++) { // 0부터 babbling의 length까지 
    
        word = babbling[i].toString();      // word에 abbling[i]를 문자타입으로 변경
                                            

        for(var j=0; j<babblingArr.length; j++) { // babbling[0].toString() 일떄 babblingArr.length만큼 반복

            word = word.replaceAll(babblingArr[j], ' ');    //babbling[0].toString()이 babblingArr와 일치한다면 공백으로 리플레이스해줘라

        }


        if( word.trim().length == 0) {  //replaceAll을 한것중에 공백을 제거하고 이것의 length가 0이라면 answer++해줘라
            answer++;
        }

    }


    return answer;
}



//toString()
    // 숫자타입를 문자타입로 바꿔준다!

//trim()
    //메서드는 문자열 양 끝의 공백을 제거합니다.

//replaceAll('A','b')
    // 모든 A 를 b로 대체한다



    // 구조를 뜯어본결과 
    // 배열의 앞부분을 문자형으로 만들어서 네가지 발음과 일치한지를 확인한후
    // 일치하는것을 공백으로 만들고 trim으로 없애서 0으로 만들어 answer로 카운드를 해서
    // 개수를 확인한다