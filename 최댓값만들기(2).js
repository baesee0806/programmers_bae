//풀었다!!!!


function solution(numbers) {
    let num = [];
    for(let i = 0; i<numbers.length;i++){
        for(let j =1; j<numbers.length;j++){
            if(i === j){
                continue;
            }else{
            num.push(numbers[i]*numbers[j])
            }
        }
    }
    return Math.max(...num)
}