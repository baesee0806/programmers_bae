// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

// 아 다풀었는데... 틀렸네... 하... 좀더 머리즘 쓰자....