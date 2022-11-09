function solution(my_string) {
    return eval(my_string);
  }

  //eval()

  //MDN 들어가서 보는데 
//   경고: 주의: 문자열로부터 **eval()**을 실행하는 것은 엄청나게 위험합니다. 
//   **eval()**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 
//   아래에 eval을 절대 사용하지 말 것!을 확인하세요.
//  여튼 eval은 문자열안에 + -을 계산 해준다