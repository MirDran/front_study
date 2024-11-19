//practice01


let arr1 = [10, '20', 30];
let arr2 = [10, '20', 30];
let arr3 = [10, 20, 30];
let arr4 = ['10', '20', '30'];

const compareArr = (arr1,arr2) => {
    for(let i = 0; i<arr1.length; i++){
        console.log( arr1[i] == arr2[i] );
    }
}

console.log('비교1');
compareArr(arr1, arr2);
console.log('비교2');
compareArr(arr3, arr4);
console.log('비교3');
compareArr(arr2, arr4);

const personInfo = {
    name:"홍길동",
    age:25,
    phone:"010-1234-5678",
    engName:"John Smith",
    nickname:" 복습마왕 "
    }

    const personInfo2 = {
        name:"홍길동",
        age:25,
        phone:"010-1234-5678".split('-'),
        engName:"John Smith".toUpperCase(),
        nickname:" 복습마왕 ".trim()
        }

        const personInfo3 = {
            name:"홍길동",
            age:25,
            phone:"010-1234-5678",
            engName:"John Smith",
            nickname:" 복습마왕 "
            }

// personInfo.phone = [personInfo3.phone.substring(0,3),personInfo3.phone.substring(4,8),
    // personInfo3.phone.substring(9,13)];
personInfo3.phone = personInfo3.phone.split('-');
personInfo3.engName = personInfo3.engName.toUpperCase();
personInfo3.nickname = personInfo3.nickname.trim();
//trim 공백제거

console.log(personInfo);
console.log(personInfo2);
console.log(personInfo3);
// console.log(personInfo2.nickname.trim()); //앞뒤 공백 제거
// console.log(personInfo2.nickname.replace(" ",""));// 공백 앞에 변경
// console.log(personInfo2.nickname.replace(/ /g,""));
// // 모든 문자열 사이 값 변경

// console.log(personInfo2.engName.toLowerCase());
// console.log(personInfo2.engName.toUpperCase());
