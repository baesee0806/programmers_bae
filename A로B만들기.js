
//못품....


// 정답
function solution(before, after) {
    let answer = 0;
    const a = before.split("").sort().join("")
    const b = after.split("").sort().join("")
    return a == b ? 1 : 0
}

// split("").sort().join("")하면 단어들이 a-z 순서로 나열된다
//일치하면 1 아니면 0