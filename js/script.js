/// Module Pattern implementation
var { hamClick, hideDivOnTap } = (function(){
    var hamClick = function(element){
        if(!displayDiv){
            element.setAttribute("style", "display : block");
            displayDiv = true;

        }
        else{
            element.setAttribute("style", "display : none");
            displayDiv = false;
        }
        
    };

    var hideDivOnTap = function(element){
        if(displayDiv){
            element.style.display = "none";
            displayDiv = false;
        }
    };

    return {
        hamClick, hideDivOnTap
    }

})();

//  global variables
var  body, displayDiv, hamburgerButton, hamburgerDiv, hamburgerDivLinks, linkLen, span, date;


// adding tap event globally in a window by capturing the event 
body = document.getElementsByTagName('body')[0];
body.addEventListener("click", function(){
    console.log("body clicked");
    if(displayDiv){
        hamburgerDiv.setAttribute("style", "display : none");
        displayDiv = false;
    }
}, false);


// global state of hamburger div
displayDiv = false;

// selected the button element from DOM
hamburgerButton = document.getElementById("hamburgerButton");

// this 'div' will be displayed on state change from 'false' to 'true'
hamburgerDiv = document.getElementById("hamburgerDiv");

// these are the links within the above div for internal navigation
hamburgerDivLinks = document.querySelectorAll(".pageSection");

// added an event listener to the 'div' selected above, also stopping the event bubbling
hamburgerButton.onclick = function(event){
    event.stopPropagation();
    console.log(displayDiv);
    hamClick.call(this, hamburgerDiv);
    console.log(displayDiv);
}

// adding a event listener to every link in hamburger menu
linkLen = hamburgerDivLinks.length;
for(var i = 0; i < linkLen; i++){
    hamburgerDivLinks[i].onclick = function(event){
        event.stopPropagation();
        hideDivOnTap.call(this, hamburgerDiv);
    }
}

// removing the persisting hamburger menu
window.onresize = function(){
    if(window.innerWidth > 576){
        hamburgerDiv.setAttribute("style", "display : none");
        displayDiv = false;
    }
}

// automated year
span = document.querySelector("#year");
date = new Date();
span.textContent = date.getFullYear();

