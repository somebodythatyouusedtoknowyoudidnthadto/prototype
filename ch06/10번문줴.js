
function draw(number){


    for (let i=i;i<=number;i++){
        let str="";
        for (let j=1; j<=i;j++) {
            str+="*"
            console.log("*".repeat(i));

        }
        console.log(str);
    }
}

draw(5);