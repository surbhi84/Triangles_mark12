var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(angle1.value, angle2.value, angle3.value);
}
