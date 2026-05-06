//1부터 n까지 반복하면서,
//짝수는 더하고, 홀수는 빼는 함수 calc(N)을 작성하시오.
//최종 결과값을 반환하시길.

function calc(number){
    let sum=0;
    for(let i=1;i<=number;i++){
         if (i %2==0) {
            sum+=i;
         }else{
            sum-=i;
         }
    }
    return sum
}
console.calc(10)