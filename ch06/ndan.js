
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
i=1
rl.question("단 수를 입력하세요.:",function (dan){
    //sdan 의 구구단 출력
    //sdan *1~ sdan *9까지 출력
    let n=1
    for (n;n<10;n+=1){
        console.log(`${dan*n}`)
    }
        
    rl.close();
})