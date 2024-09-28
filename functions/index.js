
/* Function */

// function add(a,b){
//     return a+b;
// }

// var c = add(3,6);
// document.write(c);


/* BMI Calculator Coding Challange */

function bmiCalculator(weight, height){
    return Math.floor(weight/(height*height));
}

var bmi = bmiCalculator(65, 1.8);
document.write(bmi);