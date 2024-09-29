document.write(document.firstElementChild.firstElementChild.firstElementChild);


// Targetting the heading element inside body using DOM tree structure

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good, Bye";
heading.style.color = "blue";


// Targetting the checkbox in HTML using DOM

document.querySelector("input").click();



/* DOM challange - Changing the text of 3rd list item */

document.querySelector("ul").lastElementChild.innerHTML = "Devesh has changed it";

// OR

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Devesh has changed it again";