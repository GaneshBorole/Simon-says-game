// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");


// div.addEventListener("click",function(){
//     console.log("div was clicked")
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked")
// });

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked")
//     })
// };

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");


// btn.addEventListener("click",function () {
//     let item = document.createElement('li');
//     item.inneText = inp.value;
//     ul.appendChild(item);
//     inp.value = "";
    
// });



// simon says game 

let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp(); 
    }
});

function gameFlash(btn){
    btn.classList.add("Flash")
    setTimeout(function(){
        btn.classList.remove("Flash");
    },250)

}


function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randBtn=document.querySelector(`.${randcolor}`)

    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randBtn);

}


function checkAns(idx) {
    
    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over !!  your score was <b> ${level}</b><br>press any key to start! `;
        reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);    
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;

}