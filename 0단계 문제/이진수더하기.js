// 내 생각
// 스플릿으로 나눠서 마지막 자리를 제외하고 2를 곱한걸 더해주고 마지막 자리는 1을 더한다
// 이걸 두번 반복한다 
// 그리고 막혀서 구글에 검색했는데...
// parseInt(##,2)하면 2진수를 숫자로 변환
// 그값을 .toString(2)하면 다시 2진수로 바꿔준다 
// 자바스크립트의 세계는 정말 넓다...
//정답
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}