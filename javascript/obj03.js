//obj03.js

let arr = [1,2,3];

// arr[2] = 4;

//Java new int[3];
// new int [5]; -> ArrayList

//Javascript에 배열을 조작하는 함수

//추가
console.log(arr); 
arr.push(10);       // 배열 뒤에 값 추가
arr.unshift(20);    // 배열 앞에 값 추가
console.log(arr);

//삭제 
arr.pop();      // 배열 뒤에 값 삭제
arr.shift();    // 배열 앞에 값 삭제
console.log(arr);


/*
앞  삭제 shift  추가 unshift
뒤  삭제 pop    추가 push
*/

let arr1 = [1,2,3];
let arr2 = [4,5,6];
// 배열 이어 붙이기 concat
//concatenate
console.log(arr1.concat(arr2));

let arr3 = [80,...arr1,90];
// ...은 한번 분해한다고 생각하면 됩ㄴ다.
//let arr3 = [80,1,2,3,90];
console.log(arr3);

console.log('----------------------')
let arr4 = [...arr1];
//깊은 복사 vs 얕은 복사
//deep copy vs shallow copy
//주소가 아니라 배열 자체에 값으로 새로운 배열 (깊은복사)
console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1);
console.log(arr4);

//slpoce 함수/메소드
//특정위치에 추가/삭제

let arr5 = [1,2,3,4,5];

console.log(arr5);
// arr5.splice(1, 1) // 1 인덱스 에 한개
arr5.splice(1,2);   //splice(위치인덱스, 삭제할 갯수)
console.log(arr5);
arr5.splice(1,1,30); //splice(위치인덱스, 삭제할 갯수, 추가할 값)
//arr[1] = 30;
console.log(arr5);
arr5.splice(2, 0, 40);  // 삭제 갯수가 0이면 추가만함
// 2 인덱스 위치에 삭제는 0개, 40값을 추가
console.log(arr5);

console.log ('-------------------------')
let obj = {};
console.log(obj);

obj.menu = "김밥";
obj.price = 3500;

obj.price = 3800;
obj.location = "큰길";
console.log(obj);

obj.menu = "참치김밥"; //수정은 그냥 변수에 재저장

delete obj.menu; //메뉴 삭제

console.log(obj);



//--------------
console.log('-------------------------');

let today = new Date();

console.log(today);
console.log(today.getFullYear());   //년도
console.log(today.getMonth());      //월 0~11 0= 1월 +1을 해야함
console.log(today.getDate());       //일
console.log(today.getHours());      //시
console.log(today.getMinutes());    //분
console.log(today.getSeconds());    //초

//String.valueOf
//Integer.parseInt
console.log(Math.round(1.55));
console.log(Math.trunc(123.123));

