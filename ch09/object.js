const obj ={
    name:"박경련",
    age:27,
    sayHello: function(msg){
        console.log("안녕하세요"+msg);
    },
};

Math.ceil()

obj.sayHello()//객체 내 매서드 호출
///첫언언 때 없었던 속성인 경우,동적으로 추가된다.
obj.gender="male";
//delete 키워드를 사용해 속성을 지정해 삭재할 수 있따.
delete obj.gender
//console.log(obj["name"]);
//대괄호 혹은 . 이용하여 프로프티 참조 가능
//console.log(obj["name"]);
//console.log(obj.name);
let id ="1234";
let pw="1234";
const obj2={
    id:id,
    pw:pw,
};

console.log(obj2);
    