const obj1 = { a: 5, b: 8};
const obj2 = obj1;

let a=10
let b=a


a=15;
console.log(b); //10-> b - a: 시점에 값만 복사돼어서 변하지 않는다
obj2.a =10;
console.log(obj1);
console.log(obj2);