var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output-div");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(angle1.value, angle2.value, angle3.value);
  const angles = inputValue();

  if (inputValidation(angles)) {
    console.log("success");
    const result = calculateAngles(angles);
    output(result);
  } else {
    errorAlert();
  }
}

function inputValue() {
  return {
    ang1: angle1.value,
    ang2: angle2.value,
    ang3: angle3.value,
  };
}

function inputValidation(angles) {
  if (angles.ang1 == "" || angles.ang2 == "" || angles.ang3 == "") return false;
  return true;
}

function calculateAngles(angles) {
  let sum =
    parseFloat(angles.ang1) + parseFloat(angles.ang2) + parseFloat(angles.ang3);
  console.log(sum);
  if (sum == 180) return true;
  return false;
}

function output(res) {
  if (res == true) {
    outputDiv.innerText = "Yayy your angles make a trigon";
  } else outputDiv.innerText = "Ooops your angles do not make a trigon";
}

function errorAlert() {
  outputDiv.innerText = "Please enter all the angles";
}
