/* if-else */

// var age = 27;
// if(age>=18){
//     document.write("you are an adult");
// }
// else{
//     document.write("you are a kid");
// }

/* if else-if else */

// var grade = 'C';
// if(grade === 'A'){
//     document.write("Excellent");
// }
// else if(grade === 'B'){
//     document.write("Good");
// }
// else{
//     document.write("Could be better");
// }



/* Program to check whether a year is leap year or not */

function isLeap(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return "Leap year.";
      } else {
        return "Not a leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

var result = isLeap(2100);
document.write(result);
