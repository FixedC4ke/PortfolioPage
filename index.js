var serviceItems = document.getElementsByClassName("services-item");

for (var i = 0; i<serviceItems.length; i++){
serviceItems[i].addEventListener("mouseover", (event)=>{
    if (event.target===event.currentTarget){
        event.target.classList.add("service-selected");
        event.target.children["readmore"].classList.add('service-selected-btn');
    }
});
serviceItems[i].addEventListener("mouseleave", (event)=>{
    if (event.target===event.currentTarget){
        event.target.classList.remove("service-selected");
        event.target.children["readmore"].classList.remove('service-selected-btn');
    }
});
}