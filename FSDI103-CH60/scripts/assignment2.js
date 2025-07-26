function temperature() {
  let celsius = prompt("Enter the celsius");
  document.getElementById(
    "result"
  ).innerHTML += `<li class="item">The Fahrenheit temperature is : ${
    (celsius * 9) / 5 + 32
  }`;
}
