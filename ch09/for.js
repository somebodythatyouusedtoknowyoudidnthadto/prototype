const arr =["고양이","사자","이랑"];
const obj={name:"박경린",age:27};

for (let i =0; i<arr.length;i++){
    console.log(arr[i]);
}

for (let animal of arr) {
    console.log(animal);
}

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}