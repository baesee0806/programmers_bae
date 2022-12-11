// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
    spell = spell.sort().join("")
    return dic.map(a => a.split("").sort().join("")).find(a => a===spell) !== undefined ? 1 : 2
}