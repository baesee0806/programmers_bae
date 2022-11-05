// 20분 고민하다가 정답이 생각이 않나서 정답을 찼아봤다....


//  정답
function solution(num_list, n) {
    let result = [];
    
    for(let i = 0; i < num_list.length / n; i++){
        result = [...result, num_list.slice(i * n, i * n + n)];
    }
    
    return result;

}

// 일단 반복문이 들어가서 전체 배열의 길이를 n으로 나눴다

// 6개를 2개씩 만들려고 한다면 6/2 = 3 3보다 작은 수 까지 i++을 해준다
// 0 1 2 
// result는 ...result, 전채 배열을 넣어주고 
// num_list.slice(i * n, i * n + n)
// 배열에서 0*2,0*2+2 = 0~ 2까지 슬라이스 해서 만들고
// 1*2,1*2+2 = 2에서 4까지 슬라이스 해서 만들고
// 2*2,2*2+2 = 4에서 6까지 슬라이스해서 
// 2차원배열을 만들었다 