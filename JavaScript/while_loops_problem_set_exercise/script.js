// 1. Write a function isEven() which takes a single numeric argument
//  and returns true if the number is even, and false otherwise
console.log("FUNCTION EVEN NUMBER:");
function isEven(num) {
  let rez = false;
  if (num % 2 === 0) {
    rez = true;
  }
  return rez;
}

console.log(isEven(22));

//  VERSION 2:
console.log("FUNCTION EVEN NUMBER VERSION 2:");
function isEven2(num) {
  return num % 2 === 0;
}
console.log(isEven2(5));

// 2. Write a function factorial() which takes a single numeric argument
// and returns the factorial of that number
console.log("FUNCTION FACTORIAL:");
function factorial(num) {
  let rez = 1;
  while (num > 1) {
    rez = rez * num;
    num--;
  }
  return rez;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

//  3. Write a function kebabToSnake() which takes a single kebab-cased
// string argument and returns the snake_cased version
console.log("FUNCTION KEBAB TO SNAKE:");
function kebabToSnake(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-") {
      newStr += str[i].replace("-", "_");
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(kebabToSnake("dogs-are-awesome-trully"));
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

// VERSION 2:
console.log("VERSION 2:");
function kebabToSnake2(string) {
  let newString = string.split("-").join("_");
  return newString;
}

console.log(kebabToSnake2("hello-world"));
console.log(kebabToSnake2("dogs-are-awesome"));
console.log(kebabToSnake2("dogs-are-awesome-trully"));

// VERSION 3:
console.log("VERSION 3:");
function kebabToSnake3(string) {
  let newString = string.replace(/-/g, "_");
  return newString;
}

console.log(kebabToSnake3("hello-world"));
console.log(kebabToSnake3("dogs-are-awesome"));
console.log(kebabToSnake3("dogs-are-awesome-trully"));
