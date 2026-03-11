const isLogin =true;
const isAdmin = false;


console.log(isLogin && isAdmin);

console.log(true||false)
console.log(false||false)

let id= "pikachu"
let pw="3212333222333321233322321";
let correctId="pikachu"
let correctpw=3212333222333321233322321;

let result =(id=== correctId&& pw=== correctpw)
? "로그인돼었습니다." :"아이디 혹은 비밀번호가틀렸지만 뭐가틀렸는지 안말해줄거임"
console.log(result);

console.log(!true);
console.log(!null);
let email="dachung"
let result2 = (email !== null && email !== undefined)? '이메일 확인' : "이메일 입력돼지 않음";
let result3 = (email ?? null) ? "이메일 확인": "이메일 입력되지 않음";

console.log(result2);
console.log(result3);
console.log(null ?? "기본값");
console.log(undefined ?? "기본값");
console.log ("안녕하세요"?? "기본값");
