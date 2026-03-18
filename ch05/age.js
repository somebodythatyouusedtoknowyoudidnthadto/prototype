
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("나이를 입력하세요.:",function (age) {
    //점수는 0~100점 사이 범위
    //60점 이상이면 합격
    //60점 미만이면 뷸합격
    if (age<19&&age<=100){
        console.log('미셩년자입니다.')
        
    
    } else if (age>19) {
        console.log('성인입니다.')
        
    }else {
        console.log('error')
    }
    rl.close()
});