var serviceItems = document.getElementsByClassName("services-item");

for (var i = 0; i<serviceItems.length; i++){
serviceItems[i].addEventListener("mouseover", ({target, currentTarget})=>{
    if (target===currentTarget){
        target.classList.add("service-selected");
        target.children["readmore"].classList.add('service-selected-btn');
    }
});
serviceItems[i].addEventListener("mouseleave", ({target, currentTarget})=>{
    if (target===currentTarget){
        target.classList.remove("service-selected");
        target.children["readmore"].classList.remove('service-selected-btn');
    }
});
}

var scrollupBtn = document.getElementById("totop");

window.onscroll = ()=>{
    scrollFunc();
}

function scrollFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollupBtn.style.visibility="visible";
        scrollupBtn.style.opacity="1";
    }
    else{
        scrollupBtn.style.visibility="hidden";
        scrollupBtn.style.opacity="0";
    }
}

