/* start scroller*/
let scroller  = document.querySelector(".scroller") ;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop =  document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%` ;
})
/* end scroller*/
/* start scroll to top*/
window.onscroll = function () {
        let scroll = document.querySelector(".scroll-to-top") ;
        if(window.scrollY >=800){
            scroll.style = "display: block;";
            if(window.scrollY>=810){
            scroll.style = "display: block; opacity: .6;";
            }
        }else{
            scroll.style = "display: none;  opacity: .0;" ;
        }
    }
    document.querySelector(".scroll").onclick = function (){
        window.scrollTo({
            top:0 ,
            behavior: "smooth",
        });
    };
/* End scroll to top*/
/*start nav*/
let other = document.querySelector(".other") ;
// document.body.onclick = function (){
//     if(other.style.opacity ==  1){
//         other.style = "opacity: 0;z-index: -1;top: calc(100% + 50px)";
//     }
document.querySelector(".nav-1").lastElementChild.onclick = function (){
    other.classList.add("show")
}
window.addEventListener("click", function(e){
    if( e.target.innerHTML !== "Other" && other.classList.contains("show")===true){
        other.classList.remove("show")
    }
})
/*end nav*/