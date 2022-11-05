function solution(numbers, k) {
    let n = numbers.length;    
    let m = (k*2)-2;
    return numbers[m%n];
}

// 내생각으로는 m은 
// 공을 한번 던질떄 +2가 된다 
// 만약 n번째 던질 사람을 찾으려면 (n*2)-2가된다 자기 자신의 경우 -2

// n번째 사람을 찾을려고 하는데 만약 3명이서 10번쨰 던질 사람을 찾는다면 
// 배열의 길이를 넘어가니까 m번째에서 n의 나머지를 구하면 배열 순서가 나오기에
// numbers[m%n]
