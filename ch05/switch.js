
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("전화번호:",function (ch) {
    switch(parseInt(ch)){
        case 1:
            console.log('엄마에게 전화가 걸린다.');
            break;
        case 2:
            console.log('아빠에게 전화가 걸린다');
            break;
        case3:
            console.log("동생에게 존화가걸린다.");
            break;
        defult;
            console.log("해당 단축키가 없다")

    }
    rl.close()
});