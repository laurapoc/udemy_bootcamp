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
