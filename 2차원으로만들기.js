
//못품...

//정답
function solution(num_list, n) {
    let result = [];
    for (let i = 0; i < num_list.length / n; i++) {
      result = [...result, num_list.slice(i * n, i * n + n)];
    }
    return result;
  }

  //for (let i = 0; i < num_list.length / n; i++) 여기까지 생각은 했는데
//   그리고 슬라이스까지 근데 범위를 어떻게 해야할지 몰라서 못했음...
// [...result, num_list.slice(i * n, i * n + n)] 이줄을 이해를 못한건데
// 저장한 배열을 다시 넣고 i * n , i * n + n 해줘야한다.....