console.log("Conditionals");

// if-statement (condition = y/n)

// Case 1: 5 == 5 -> true
// Case 2: 5 == "5" -> true because == compares the values
// Case 3: 5 === "5" -> false becasue === compares the value and datatype

// if-else statement
//if(condition){
// code to be excuted if the conition1 is true
//}

let waterTemp = 102;

if (waterTemp >= 100) {
  console.log("The water is boiling");
} else {
  console.log("The water is NOT boiling");
}

//challenge 1:

let age = 42;

if (age >= 21) {
  console.log("you are an adult");
} else {
  console.log("you are underage");
}

function ageCalculator() {
  let age = prompt("Enter the age:");
  if (age < 13) {
    console.log("You are a child");
  } else if (age < 21) {
    console.log("You are a teenager");
  } else if (age < 64) {
    console.log("You are a adult");
  } else {
    console.log("You are a senior");
  }
}

//challenge 2:
function trafficLight() {
  let light = prompt("Enter a color");
  if (light == "green") {
    console.log("GO!");
  } else if (light == "yellow") {
    console.log("Slow Down");
  } else if (light == "red") {
    console.log("Stop");
  } else {
    console.error("Not a traffic light color");
  }
}

//challenge 3:
function ticketPriceCalculators() {
  let age = prompt("Enter a age for price");
  if (age < 12) {
    console.log("Your ticket price is $5");
  } else if (age < 17) {
    console.log("Your ticket price is $8");
  } else {
    console.log("Your ticket price is $10");
  }
}

// a diffrenet way
function ticketPriceCalculator() {
  let age = prompt("Enter your age");
  let price = 0;

  if (age < 12) {
    price = 5;
  } else if (age < 18) {
    price = 8;
  } else {
    price = 10;
  }
  document.getElementById("results").innerHTML =
    "Your ticket price is " + price;
}

// challenge 4
function weatherOutfit() {
  let tmp = prompt("Enter the temperature");
  let outfit = "";
  let p = document.getElementById("results");

  if (tmp < 15) {
    outfit = "Jacket";
  } else if (tmp < 25) {
    outfit = "Sweater";
  } else {
    outfit = "T-shirt";
  }

  p.innerHTML = "You should wear: " + outfit;
}

// Switch-case
// use it for checking one single variable or expression

let action = prompt("Choose and action: jump, run, attack, or defense");

switch (action) {
  case "jump":
    console.log("You jumped over an obj");
    break;
  case "run":
    console.log("you are running");
    break;
  case "attack":
    console.log("You are attacking the enemy");
    break;
  case "defense":
    console.log("You blocked an attack");
    break;
  default:
    console.log("Unknown action, try again");
}
