//func03.js

function fff(){
    console.log(1);
    console.log(2);
    // return;
    // console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{ //화살표함수 arrow
    console.log(4);
    console.log(5);
    return 6;
}

console.log(af());

const af2 = () => 1+2+3+4; // { return }이 생략 된 것

console.log(af2());

// () => 7;
// () => { return 7; }



function scope1(){
    let x = 10;
};

// console.log(x); 작동 xx

if(true){
    let y = 300;
}

// console.log(y); 작동 xx

let z = 300;

if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
}

scope2();

// {   //scope 영역
//     let qqq = 100;
// }

// console.log(qqq);

ccc = 3000;

var ccc; //호이스트 처럼 var가 맨 위에 있는 것으로 취급

console.log(ccc);

// dd = 30;
// let dd;
// console.log(dd);

check();
function check(){ //호이스팅 선운부를 위로 올려줌
    console.log('check');
}
check();
