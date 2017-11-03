function hamClick(){
    displayDiv = !displayDiv;
    if(displayDiv){
        hamburgerDiv.setAttribute("style", "display : block");
    }
    else{
        hamburgerDiv.setAttribute("style", "display : none");
    }
    
}

function hideDiv(){
    if(displayDiv){
        hamburgerDiv.setAttribute("style", "display : none");
        displayDiv = false;
    }
}


// automated date
var span = document.querySelector("#year");
var date = new Date();
span.textContent = date.getFullYear();


// hamburger button control
var hamburgerButton = document.getElementById("hamburgerButton");
var hamburgerDiv = document.getElementById("hamburgerDiv");


var displayDiv = false;
hamburgerButton.addEventListener("click", hamClick);

window.onresize = function(){
    if(window.innerWidth > 576){
        hamburgerDiv.setAttribute("style", "display : none");
        displayDiv = false;
    }
}