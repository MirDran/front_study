//operator
//oper01.js

let x = 10;
let y = 10;
let z = '10';

console.log (x == y);   //true  값이 같음
console.log (x == z);   //true  값이 같음
console.log (x === y);  //true  값이랑 타입이 같음
console.log (x === z);  //false 값은 같으나 타입이 다름

// != !==

console.log (x != y);   //false  값이 같음
console.log (x != z);   //false  값이 같음
console.log (x !== y);  //false  값이랑 타입이 같음
console.log (x !== z);  //true 값은 같으나 타입이 다름


console.log (1==1 && 2==2);
// A && B 둘 다 참 -> 참
// A || B 들 디 거짓 -> 거짓

console.log( 1==1 && 10);   //10    앞이 참이라서 뒤에 10 리턴

console.log( 1!=1 && 10);   //false 앞이 거짓이면 뒤에를 반환 안함

console.log( 1!=1 || 20);   //20    앞에 비교했더니 거짓이라 뒤 20 리턴

console.log( 1==1 || 20);   //true  앞 비교 했더닌 진실이라 반환X

let a = 10;

if(a == 10){
    console.log("A");
}

a == 10 && console.log("A");

let q = 10;
let w = '20';
let e = 30;

console.log(q+w);
console.log(q+e);
console.log(q+' '+e);

console.log(q+String(e));
console.log(q+Number(w));

console.log(Number("123"));
console.log(Number("123.456"));

