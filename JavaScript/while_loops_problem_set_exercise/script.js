// 1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
let x = -10;

while (x <= 19) {
  console.log(x);
  x++;
}

// 2. Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
let evenNumbers = 10;

while (evenNumbers <= 40) {
  console.log(evenNumbers);
  evenNumbers += 2;
}

// 2. Print all even numbers between 10 and 40 (with module)
console.log("Print all even numbers between 10 and 40 with module");
let evenNumbersMod = 10;

while (evenNumbersMod <= 40) {
  if (evenNumbersMod % 2 === 0) {
    console.log(evenNumbersMod);
  }
  evenNumbersMod++;
}

// 3. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
let oddNum = 300;

while (oddNum <= 333) {
  if (oddNum % 2 === 1) {
    console.log(oddNum);
  }
  oddNum++;
}

// 4. print all numbers divisible by 5 AND 3 between 5 and 50
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
let divisibleNum = 5;

while (divisibleNum <= 50) {
  if (divisibleNum % 5 === 0 && divisibleNum % 3 === 0) {
    console.log(divisibleNum);
  }
  divisibleNum++;
}
