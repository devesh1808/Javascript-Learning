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

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    // using Switch statement for playing sound for differnt buttons
    var key = this.innerHTML;
    switch (key) {
      case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
      case "a":
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
      case "s":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
      case "j":
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;
      case "k":
        var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;
      case "l":
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;
      default:
        console.log(key);
    }
  });
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();






/* Js Objects */

// var bellBoy1 = {
//     myName : "Jimmy",
//     age : 25,
//     hasWorkPermit : true,
//     languages : ["English", "French"]
// }

// // Here, bellBoy1 is object, and myName, age, etc are it's properties

// console.log(bellBoy1);
// console.log(bellBoy1.myName);
// console.log(bellBoy1.hasWorkPermit);
// console.log(bellBoy1.languages);
// console.log(bellBoy1.languages[1]);




// Constructor Function

/* Let's say, not 1 object, if you want to create 'n' objects with similar properties, then creating a new object 
every time and assigning values to them again and again would be time consuming, so better solution 
is to use Constructor Function in this case */

// function BellBoy (myName, age, hasWorkPermit, languages){
//     this.myName = myName;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// var bellBoy1 = new BellBoy("Jimmy", 24, true, ["English", "French"]);

// var bellBoy2 = new BellBoy("Jordan", 23, false, ["German, French"]);

// var bellBoy3 = new BellBoy("Robert", 29, true, ["African, Hindi"]);


// console.log(bellBoy3.languages);
// console.log(bellBoy2.hasWorkPermit);
// console.log(bellBoy1.myName);





/* Adding a method(function) in a constructor function and using it with objects */

function BellBoy (myName, age, hasWorkPermit, languages){
    this.myName = myName;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
        alert("May I move your suitcase ? ");
    }
}


var bellBoy1 = new BellBoy("Jimmy", 24, true, ["English", "French"]);
var bellBoy2 = new BellBoy("Jordan", 23, false, ["German, French"]);

console.log(bellBoy1.moveSuitcase());
console.log(bellBoy2.moveSuitcase());
