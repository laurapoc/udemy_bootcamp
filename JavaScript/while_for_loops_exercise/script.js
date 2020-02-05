// 1. Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
let x = -10;

while (x <= 19) {
  console.log(x);
  x++;
}

// 1. Print all numbers between -10 and 19 FOR LOOP:
console.log("Print all numbers between -10 and 19 FOR LOOP");
for(let i = -10; i < 20; i++) {
  console.log(i);
}

// 2. Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
let evenNumbers = 10;

while (evenNumbers <= 40) {
  console.log(evenNumbers);
  evenNumbers += 2;
}

// Print all even numbers between 10 and 40 FOR LOOP:
console.log("Print all even numbers between 10 and 40 FOR LOOP");
for(let i = 10; i < 41; i += 2) {
  console.log(i);
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

// Print all even numbers between 10 and 40 (with module) FOR LOOP:
console.log("Print all even numbers between 10 and 40 (with module) FOR LOOP");
for(let i = 10; i < 41; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
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

// 3. Print all odd numbers between 300 and 333 FOR LOOP:
console.log("Print all odd numbers between 300 and 333 FOR LOOP:");
for(let i = 300; i < 334; i++) {
  if(i % 2 === 1) {
    console.log(i);
  }
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

// 4. print all numbers divisible by 5 AND 3 between 5 and 50 FOR LOOP:
console.log("P rint all numbers divisible by 5 AND 3 between 5 and 50 FOR LOOP");

for(let i = 5; i < 51; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}