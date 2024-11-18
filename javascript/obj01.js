//obj01.js

let scores = [10, 30, 50, 40];

console.log(scores[3]); 

// RUN CODE -> Ctrl+Alt+N

//object

//JSON : JavaScript Object Notation
//{ key : value}


let weather = '맑음';

console.log(weather);

let weatherInfo ={
                weather : '맑음',
                temp : 2,
                location : 'cheonan'
                };

console.log(weatherInfo.weather);
console.log(weatherInfo.temp);
console.log(weatherInfo.location);

// 점심식사 정보  메뉴 짜장면 가격 5000 식당 대천반점 위치 천안시장 내부

let lunchInfo = {
    menu : "짜장면",
    price : 5000,
    shop : '대천반점',
    location : '천안시장내부'
};

console.log(lunchInfo.menu);
console.log(lunchInfo.price);
console.log(lunchInfo.shop);
console.log(lunchInfo.location);

//객체, 배열
// 객채 + 배열  객체 안에 배열 , 배열 안에 객체 가능

let ShopInfo = {
     name : '대천반점',
     location : '천안시장내부',
     menu : ['짜장면','짬뽕','볶음밥'],
     price : [5000, 7000, 6000]
};

//중괄호 객체 , 대괄호 배열

console.log(ShopInfo.location);
console.log(ShopInfo.menu[1]);
console.log(ShopInfo.price[1]);

let ShopInfo2 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {   
            name:'짜장면',
            price: 5000
        },
        {
            name:'짬뽕',
            price: 7000
        },
        {
            name:'볶음밥',
            price: 8000
        }
    ]
};

console.log(ShopInfo2.menu); // 메뉴 배열 정보
console.log(ShopInfo2.menu[2]); //메뉴배열[2] -> 볶음밥
console.log(ShopInfo2.menu[2].price); //볶음밥 가격만


let ShopInfo3 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {   
            name:'짜장면',
            price: 5000,
            raw : ['춘장','양파','돼지고기']
        },
        {
            name:'짬뽕',
            price: 7000,
            raw : ['오징어','면','고춧가루']
        },
        {
            name:'볶음밥',
            price: 8000,
            raw : ['당근','달걀','감자']
        }
    ]
};

console.log(ShopInfo3.menu[0].raw);//짜장면 재료 출력
//짜장면 재료 중에 양파만 출력
console.log(ShopInfo3.menu[0].raw[1]);


let shopList = [
    {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {   
            name:'짜장면',
            price: 5000,
            raw : ['춘장','양파','돼지고기']
        },
        {
            name:'짬뽕',
            price: 7000,
            raw : ['오징어','면','고춧가루']
        },
        {
            name:'볶음밥',
            price: 8000,
            raw : ['당근','달걀','감자']
        }
    ]
    },
    {name : '맘스터치',
        location : '천안길가',
        menu : [
            {   
                name:'싸이버거',
                price: 5000,
                raw : ['빵','닭다리살','채소']
            },
            {
                name:'휠렛버거',
                price: 7000,
                raw : ['빵','닭가슴살','채소']
            }
        ]
    }
];

//휠렛 버거의 가격
console.log(shopList[1].menu[1].price);
//볶음밥의 재료들
console.log(shopList[0].menu[2].raw);
//싸이버거에 닭다리살 재료
console.log(shopList[1].menu[0].raw[1]);
//대천반점의 위치
console.log(shopList[0].location);

