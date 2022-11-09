// 못풀음...


//정답
function solution(quiz) {
    let result = []


    for (let i = 0; i < quiz.length; i++) {
      let a = eval(quiz[i].split("=")[0])
      console.log(a)

      let b = quiz[i].split("=")[1] / 1



      if (a === b) {
      result.push("O")
    } else {
      result.push("X")
    }

    } 



    return result
}


// eval()이라는거!
// 이게 중요한 문제였던거 같다
// eval()은 "3+2" 문자열 안에 수학적 계산을 해주는 건데
// 이걸 알고 있으면 =으로 스플릿 해서 0번쨰와 1번째가 같다면 o 아니면 x를 해주는 문제였다