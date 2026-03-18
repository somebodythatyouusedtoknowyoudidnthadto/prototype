
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("정수를 입력하세요.:",function (num) {
    //점수는 0~100점 사이 범위
    //60점 이상이면 합격
    //60점 미만이면 뷸합격
    if (num%2===0){
        console.log('짝수입니다.')
        
    
    } else {
        console.log('홀수입니다.')
        
    }
    rl.close()
})