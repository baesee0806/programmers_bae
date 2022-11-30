// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/82612

// n+(n*i)....



function solution(price, money, count) {
    let sum =0;
    
    for(let i=0;i<count;i++){
        sum += price+(price*i);
    }
    if(money-sum > 0){
        return 0
    }else if(money-sum === 0){
        return 0
    }else{
        return Math.abs(money-sum)
    }
}