/* start scroller*/
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll",()=>{

    let scrollTop =  document.documentElement.scrollTop;

    document.querySelector(".scroller").style.width = `${(scrollTop / height) * 100}%`;

});
/* end scroller*/
/* start scroll to top*/
window.onscroll = function () {

        let scroll = document.querySelector(".scroll-to-top");

        if(window.scrollY >= 900){

            scroll.style = "opacity:1;";

        }else{

            scroll.style = " opacity:0;" ;

        }

        seals();//sales section decrement function

        fillProg();//houses-cup full-progress

    };

    document.querySelector(".scroll").onclick = function (){

        window.scrollTo({

            top:0 ,

            behavior: "smooth",

        });

    };
/* End scroll to top*/
/*start nav-menu*/
document.querySelector(".nav-1").lastElementChild.onclick = function (){

    document.querySelector(".other").classList.add("show");

}

window.addEventListener("click", function(e){

    if( e.target.innerHTML !== "Other" && document.querySelector(".other").classList.contains("show")===true){

        document.querySelector(".other").classList.remove("show");

    }

})
/*end nav-menu*/
/* start quidditch-cup date */
let countDown = new Date("12 31, 2023 23:59:59").getTime() ;

let counter = setInterval(() => {

    let dateDiff = countDown - new Date().getTime() ; 

    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24)) ;
    document.querySelector(".days").innerHTML =  days < 10 ? `0${days}` : days ;

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60)) ;
    document.querySelector(".hours").innerHTML =  hours < 10 ? `0${hours}` : hours ;

    let minuets = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60) ) ;
    document.querySelector(".minutes").innerHTML = minuets < 10 ? `0${minuets}` : minuets ;

    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 ) ;
    document.querySelector(".seconds").innerHTML =  seconds < 10 ? `0${seconds}` : seconds ;

    if(dateDiff < 0){

        clearInterval(counter);

    }

}, 1000) ;
/* end quidditch-cup date */
/*start houses-cup fill-progress*/
function fillProg() {

    if(window.scrollY >= document.querySelector(".houses-cup").offsetTop + 100){

    document.querySelectorAll(".houses-cup .houses .house .score span").forEach((prog) => progress(prog));

    }
}

function progress(ele) {

    let prog = ele.dataset.width ;

    ele.style.width = prog ;

}
/*end houses-cup full-progress*/
/* start sales section decrement */
let start = false ;

function seals() {

    if(window.scrollY >= document.querySelector(".sales").offsetTop){

        if(!start){

            document.querySelectorAll(".sales .box .decrement").forEach(num => decrement(num));

        }

    start = true; 
    }
}
function decrement(ele) {

    let count = setInterval(() => {

        ele.textContent++

        if(ele.textContent == ele.dataset.goal ){

            clearInterval(count);

        }

    }, 4000 / ele.dataset.goal ) ;
}
/* end sales section decrement */
