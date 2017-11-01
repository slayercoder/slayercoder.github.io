var span = document.querySelector("#year");
var date = new Date();
span.textContent = date.getFullYear();


var hamburgerButton = document.getElementById("hamburgerButton");
var hamburgerDiv = document.getElementById("hamburgerDiv");

var displayDiv = false;
function hamClick(){
    displayDiv = !displayDiv;
    if(displayDiv){
        hamburgerDiv.setAttribute("style", "display : block");
    }
    else{
        hamburgerDiv.setAttribute("style", "display : none");
    }
    
}
hamburgerButton.addEventListener("click", hamClick);

window.onresize = function(){
    if(window.innerWidth > 576){
        hamburgerDiv.setAttribute("style", "display : none");
    }
}