// JAVASCRIPT PRACTICE PROBLEMS - 2 
// NOTE: HAR PROGRAM KLYE ARRAY USER SE LE JIS ME 5 ELEMENTS HO 
// 6. FIND THE SMALLEST NUMBER IN AN ARRAY
// 7.CONVERT CELCIUS TO FAHRENHEIT
 // 8. CONVERT FAHRENHEIT TO CELCIUS
  // 9.REVERSE AN ARRAY 
// 10. CALCULATE AVERAGE OF AN ARRAY


var numbers = [];
var minNumber = [];

for (let i = 0; i < 5; i--) {
    numbers[i] = +prompt("Please Enter numbers");
    if(numbers[i] < minNumber){
        minNumber=numbers[i];
    }
}
console.log(numbers);
console.log(`The smallest number is ${minNumber}`);






// var numbers = [];
// var minNum = null; 

// for (var i = 1; i <= 5; i++) {
//   numbers[i] = parseInt(prompt("Enter any numbers"));
//   if (minNum === null || numbers[i] < minNum) {
//     minNum = numbers[i];
//   }
// }

// console.log(`The smallest number is: ${minNum}`);

//PROBLEM 2


    // var celcius = +prompt(`Enter any number`);
    // var fahrenheit = (celcius * 9/5) + 32 ;

    // console.log(`Temperature ${celcius} in Fahrenhiet: ${fahrenheit}`);


// PROBLEM 3

// var fahrenheit = +prompt("Please enter farenhiet");
// var celcius = (fahrenheit - 32) * 5/9;
// console.log(`temprature ${fahrenheit} in celcius ${celcius}`);


//PROBLEM 4

// let emptyArray = [];

// for (let i = 0; i < 5; i++) {
//     let num = +prompt(`Enter element ${i+1}:`);
//     emptyArray.push(num);
// }

// console.log("Original array:", emptyArray);


// let reversedArr = [];
// for (let i =emptyArray.length - 1; i >= 0; i--) {
//   reversedArr.push(emptyArray[i]);
// }

// console.log("Reversed array:", reversedArr);

//PROBLEM 

// let emptyArray = [];

// for (let i = 0; i < 5; i++) {
//   let num = +prompt(`Enter element ${i+1}:`);
//   emptyArray.push(num);
// }

// console.log("Array:", emptyArray);

// let sum = 0;

// for (let i = 0; i < emptyArray.length; i++) {
//   sum += emptyArray[i];
// }

// let average = sum / emptyArray.length;
// console.log(sum);
// console.log("Average:", average);
