console.log("functions.js");

//Example 1 with 2 parameters
function greet(name, name2 = "Someone") {
  console.log("Hello " + name + " and " + name2);
}

greet("Raggie");
greet("Elliot", "Mike");

// what i got
function doubleNumber(number) {
  console.log(number * 2);
}

doubleNumber("10");
doubleNumber("15");

// how the teacher showed us
function doubleNumber(number) {
  let total = number * 2;
  console.log(total);
}

doubleNumber(2);

// Example 2, with prompt
function welcome() {
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");

  console.log("Welcome " + name + " the age is " + age);
}

//Exaple 3, with default parameters
function add(num1 = 0, num2 = 0) {
  let total = num1 + num2;
  console.log("the total is: " + total);
}

add(5, 5);
add(6, 2);
add(2, 7);
add();

//Challenge 2: Combine Names
function combineNames(firstName, lastName = "unknow") {
  console.log(`${firstName} ${lastName}`);
}

combineNames("Alice", "Jashon");
combineNames("Alice");

// Challenge 3: Convert minutes to Seconds
function converToSeconds() {
  let minutes = prompt("Enter the minutes");
  document.getElementById(
    "result"
  ).innerHTML += `<li class="item">The conversion is : ${60 * minutes}s</li>`;
}
