
let snacks = ["치즈토스트","딸기 에이드","초코 쿠키"];
const getRandomNumber = function(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;

};
document.getElementById("btn_event").onclick=function() {
    const num = getRandomNumber(0,snacks.length-1);
    document.getElementById("event_result").textContent=
    `오늘의 간식은 ${snacks[num]}입니다!`;
}
const renderSnack = function (snack) {
    const li= document.createElement("li");
    li.textContent = snack;
    document.getElementById("menu_list").appendChild(li);
    
    //입력받은 간식 이름을 ul내에 li로 추가한다.
    };
const addSnack = function (snack) {
    //입력받은 이름이 비어있으면 false,
    //그게아니면 true 반환
    if (snack){
        snacks.push(snack);
        return true;
    }
    return false;
};

for (let i = 0; i <snacks.length; i++){
    renderSnack(snacks[i]);
}

document.getElementById("btn_add").onclick = function() {
   const snack = document.getElementById("input_snack").value;

   if (addSnack(snack)){
    renderSnack(snack);
   }else{
    alert("간식이름을 알려주시죠")
   }
    //1.    현재 인풋에 입력된 값을 가져온다
    //2.    값이 비었는지 검사한다.
    //2-1. 비어있다면 안내 후 종료
    //3. 비어있지 않다면,배열에 추가
    //4. 목록에 랜더링

};
