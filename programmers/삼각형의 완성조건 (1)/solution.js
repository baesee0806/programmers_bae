// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
    let maxn = sides.sort((a,b)=>b-a);
    if(maxn[0] >= maxn[1]+maxn[2]){
        return 2;
    }else{return 1}
}