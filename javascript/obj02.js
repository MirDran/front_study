//obj02.js


let scores = [10, 30, 50, 40];

//for 반복문

for (let i = 0; i<scores.length; i++){
    console.log(scores[i]);
}

//for(String item" stringArr)  향상된 for문
for(let i in scores){
    console.log(i + ' ' + scores[i]);
}

// item value score
for(let item of scores){
    console.log(item);
}


//foreach
scores.forEach( (item, index)=>{
    console.log(item+ ' '+index);
});


