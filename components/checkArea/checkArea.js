var base = document.querySelector("#triangle-base");
var height = document.querySelector("#triangle-height");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output-div");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(base.value, height.value);
  const input = inputValue();

  if (inputValidation(input)) {
    const result = calculateArea(input);
    output(result);
  } else {
    errorAlert();
  }
}

function inputValue() {
  return {
    b: parseFloat(base.value),
    h: parseFloat(height.value),
  };
}

function inputValidation(input) {
  if (isNaN(input.b) || isNaN(input.h)) return false;
  if (input.b <= 0 || input.h <= 0) return false;
  return true;
}

function calculateArea(input) {
  let area = (input.b * input.h) / 2;
  console.log(area);
  return area;
}

function output(result) {
  outputDiv.innerText = `The area of the triangle is ${result}.`;
}

function errorAlert() {
  outputDiv.innerText = "ERROR: Please enter all the angles!";
}
