var side1 = document.querySelector("#side-1");
var side2 = document.querySelector("#side-2");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output-div");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const input = inputValue();

  if (inputValidation(input)) {
    const result = calculateHypotenuse(input);
    output(result);
  } else {
    errorAlert();
  }
}

function inputValue() {
  return {
    s1: parseFloat(side1.value),
    s2: parseFloat(side2.value),
  };
}

function inputValidation(input) {
  if (isNaN(input.s1) || isNaN(input.s2)) return false;
  if (input.s1 <= 0 || input.s2 <= 0) return false;
  return true;
}

function calculateHypotenuse(input) {
  // we can use math.hypot too
  let hypotenusesq = Math.pow(input.s1, 2) + Math.pow(input.s2, 2);
  let hypotenuse = Math.sqrt(hypotenusesq);
  console.log(hypotenuse);
  return hypotenuse;
}

function output(result) {
  outputDiv.innerText = `The Hypotenuse of the triangle is ${result}.`;
}

function errorAlert() {
  outputDiv.innerText =
    "ERROR: Please fill both input tabs with values greater then zero!";
}
