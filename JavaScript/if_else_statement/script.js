let age = prompt("What is your age?");

if (age < 0) {
  alert("Invalid entry.");
} else if (age == 21) {
  alert("Happy 21st birthday");
} else if (age != 21 && age % 2 === 1 && Math.sqrt(age) % 1 !== 0 && age !== 21) {
  alert("Your age is odd!");
} else if (Math.sqrt(age) % 1 === 0) {
  alert("Perfect square: " + Math.sqrt(age));
} else {
  alert("your age is: " + age);
}

console.log("console: " + Math.sqrt(age));
console.log("age: " + age);

// Offered solution:

// // Get age and convert it to a Number (prompt always returns a String)
// var age = Number(prompt("What is your age?"));
 
// // If age is negative
// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }
 
// // If age is 21  
// if(age === 21) {
//  console.log("Happy 21st Birthday!");
// }
 
// // If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }
 
// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }