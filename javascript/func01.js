//func01.js

function func01(){
    console.log('func01');
}

func01();

function func01_2(){
    return "func01_2";
}

console.log(func01_2());

const func02 = function func002() {
    console.log('func02');
}

//func002(); 실행 xx 왼쪽것 으로 불러야함
func02();

const func02_2 = function () {
    console.log('func02_2');
}

func02_2();

const func03 = ()=> {
    console.log('func03');
}

func03();

//매개변수 / 인수

function func05(a,b){   //매개변수 a, b
    console.log(a+ " " + b);
}

func05(10,20); // 10 20 인수
func05("a","b"); // a b 인수

const func06 = function func006(a, b){
    console.log(a+" "+b);
}
func06(30, 40);


const func07 = function (a, b){
    console.log(a+" "+b);
}
func06(80, 40);

const func08 = (a, b) => {
    console.log(a+" "+b);
}
func08(100,150);

func08(); // undefined로 뜨고 오류가 나지는 않음

function func10 (a,b){
    console.log(a + " " + b);
}
func10 (10,20);

function func11(a,b){
    console.log(a);
    b();
}

function temp(){
    console.log('temp func');
}

func11(100, temp);

function temp2(t){
    //code
    console.log('temp2 func');
    // code
    // 10s
    t();
}

temp2(temp);
// temp()
//callback  함수

//temp2 함수를 실행하고 나서 temp함수를 실행

temp2 ( ()=> {
    console.log ('그냥 바로 만들어본 함수;')
});

(function (){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();

// oneuse(); 인식하지 못함 1회용