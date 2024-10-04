
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked");
// }



/* created event listener using anonymous function */

// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked");
// });



/* adding event listener to all buttons */

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i=0; i<numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         alert("I got clicked");
//     });
// }




/* Higher Order Function (HOF) and passing functions as argument */

// HOF are functions that can take other functions as inputs

// function add(num1, num2){
//     return num1+num2;
// }

// function multiply(num1, num2){
//     return num1*num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// console.log(calculator(2,6,add));

// console.log(calculator(2,6,multiply));





/* Playing Sound(Audio) in Js */

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "white";
    });
}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();