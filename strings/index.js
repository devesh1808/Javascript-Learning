
// String Concatenation

// alert("hello" + " " + "world");
// alert("hello" + " world");

// var message = "Hello";
// var myName = "Devesh";
// alert(message + " there, " + myName);



/* String Length */

// var myName = "Devesh Kumar";
// document.write(myName.length);


// // Task to show how many characters you have written, and how many characters remaining based on max Limit using prompt and alert
// var maxLimit = 140;
// var userInput = prompt("Enter anything here : ");
// var userInputChar = userInput.length;
// var remainingChar = maxLimit-userInputChar;
// alert("You have written " + userInputChar + " characters, " + remainingChar + " are remaining now");



/* Slicing */

myName = "Devesh";
document.write(myName.slice(0,1));  // It has extracted the string starting from index 0 to index 1(excluding index 1)

document.write(myName.slice(5,6));
document.write(myName.slice(myName.length-1, myName.length));  //same as above

document.write(myName.slice(0,3));

document.write(myName.slice(1,5));

var maxLimit = 140;
var userInput = prompt("Enter anything here : ");
var userInputLimit140 = userInput.slice(0, maxLimit); //we are cutting down the string to max 140 chars only
alert(userInputLimit140);  