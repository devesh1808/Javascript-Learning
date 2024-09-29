document.write(document.firstElementChild.firstElementChild.firstElementChild);


// Targetting the heading element inside body using DOM tree structure

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good, Bye";
heading.style.color = "blue";


// Targetting the checkbox in HTML using DOM

document.querySelector("input").click();