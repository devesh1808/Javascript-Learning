// document.write(document.firstElementChild.firstElementChild.firstElementChild);


// // Targetting the heading element inside body using DOM tree structure

// var heading = document.firstElementChild.lastElementChild.firstElementChild;
// heading.innerHTML = "Good, Bye";
// heading.style.color = "blue";


// // Targetting the checkbox in HTML using DOM

// document.querySelector("input").click();



// /* DOM challange - Changing the text of 3rd list item */

// document.querySelector("ul").lastElementChild.innerHTML = "Devesh has changed it";

// // OR

// document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Devesh has changed it again";




/* Different ways for selecting HTML elements */

// 1. querySelector()

//2. getElementsByTagName()

//document.getElementsByTagName("li")[2].style.color = "lime";

// 3. getElementsByClassName()

//document.getElementsByClassName("btn")[0].style.color = "blue";

// 4. getElementById()

// document.getElementById("title").style.color = "purple";

// document.getElementById("list").style.color = "red";

// document.getElementById("title").innerHTML = "Time to Say GoodBye";


// Note : you can fetch an element from querySelector() by mentioning the element name, class name or id name

// document.querySelector("h1").innerHTML = "Changed title 1";

// document.querySelector("#title").innerHTML = "Changed title 2";

// document.querySelector(".btn").style.color = "orange";


// Combining elements or combining selectors in querySelector()

// document.querySelector("li a").style.color = "green";

// document.querySelector("li.item").style.color = "red";  // will target the first list item

// document.querySelector("#list a").style.color = "orange";


// Selecting all matching selectors using querySelectorAll()

//document.querySelectorAll("#list .item").style.color = "red";






/* Manipulating and Changing Styles of HTML elements with js */

// document.querySelector("h1").style.color = "red";

// document.querySelector("h1").style.fontSize = "5rem";

// document.querySelector("h1").style.visibility = "hidden";

// document.querySelector(".btn").style.backgroundColor = "yellow";

// document.querySelector("button").style.backgroundColor = "lime";  // same as above




/* innerHTML vs textContent */

// document.write(document.querySelector("h1").textContent);

// document.querySelector("h1").textContent = "Changed the text using textContent";

// document.querySelector("h1").innerHTML = "<em>Changed the text using innerHTML</em>";





/* Manipulating HTML element attributes */

document.querySelector("a");

document.querySelector("a").attributes;  // to check all the attributes associated to "a"

document.write(document.querySelector("a").getAttribute("href"));  // will give the value of href

document.querySelector("a").setAttribute("href", "https://www.bing.com");  // will set the value of href