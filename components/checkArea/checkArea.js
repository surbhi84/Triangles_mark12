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
    b: base.value,
    h: height.value,
  };
}

function inputValidation(input) {
  if (input.b == "" || input.h == "") return false;
  return true;
}

function calculateArea(input) {
  let area = (parseFloat(input.b) * parseFloat(input.h)) / 2;
  console.log(area);
  return area;
}

function output(result) {
  outputDiv.innerText = `The area of the triangle is ${result}`;
}

function errorAlert() {
  outputDiv.innerText = "Please enter all the angles";
}
