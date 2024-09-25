
// String Concatenation

// alert("hello" + " " + "world");
// alert("hello" + " world");

// var message = "Hello";
// var myName = "Devesh";
// alert(message + " there, " + myName);



/* String Length */

var myName = "Devesh Kumar";
document.write(myName.length);


// Task to show how many characters you have written, and how many characters remaining based on max Limit using prompt and alert
var maxLimit = 140;
var userInput = prompt("Enter anything here : ");
var userInputChar = userInput.length;
var remainingChar = maxLimit-userInputChar;
alert("You have written " + userInputChar + " characters, " + remainingChar + " are remaining now");