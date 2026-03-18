
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("점수를 입력하세요.:",function (score) {
    //100~91점 ~A학점
    //81~90점- B학점
    //71~80점- C학점
    //61~70점- D학점
    //0~60점- F학점
    //그외 ~범위를 벗어남
    if(score>90&&score<=100) {
        console.log('A')
    }else if (score>80){
        console.log('B')
    }else if (score>70){
        console.log('C')
    }else if (score>60){
        console.log('D')
    }else if (score>0){
        console.log('F')
    }else{
        console.log('error')
    }
    
    rl.close()
});