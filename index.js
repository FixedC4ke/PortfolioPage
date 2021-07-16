function onMouseOverServiceItem(obj){
    obj.style.color="white";
    obj.style.backgroundColor="#00897b";
    var button = obj.getElementsByClassName("button button-services")[0];
    button.style.color="white";
    button.style.borderColor="white";
}

function onMouseLeaveServiceItem(obj){
    obj.style.color="black";
    obj.style.backgroundColor="white";
    var button = obj.getElementsByClassName("button button-services")[0];
    button.style.color="black";
    button.style.borderColor="black";
}