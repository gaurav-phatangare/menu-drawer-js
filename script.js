// target elements 

var openCloseBtn = document.querySelector("#openCloseBtn");
var menuDrawer= document.querySelector(".menuDrawer");
var homeBtn= document.querySelector(".homeBtn");
var menuDrawer2= document.querySelector(".menuDrawer2");

var currentState = 'closed';
var currentState2 = 'closed';


openCloseBtn.addEventListener("click",()=>{

    if(currentState == 'open'){
        currentState = 'closed';
        menuDrawer.classList.add("open");

    }else{
        currentState = 'open';
        menuDrawer.classList.add("hidden");
        menuDrawer.classList.remove("open");
    }

});


homeBtn.addEventListener("click",()=>{

    if(currentState2 == 'open'){
        currentState2 = 'closed';
        menuDrawer2.classList.add("open");

    }else{
        currentState2 = 'open';
        menuDrawer2.classList.add("hidden");
        menuDrawer2.classList.remove("open");
    }

});