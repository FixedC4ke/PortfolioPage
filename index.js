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