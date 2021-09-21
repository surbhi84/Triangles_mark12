import { questionArray } from "./questionArray.js";

const question = document.querySelector("#ques");

const radioBtns = document.querySelectorAll(".a");

const startBtn = document.querySelector("#btn");
const questionBlock = document.querySelector("#question-block");
const initialBlock = document.querySelector("#initial-block");
let nextBtn = document.querySelector("#next-btn");
let resultDiv = document.querySelector("#results");

questionBlock.style.display = "none";
let i = 0;
let qno = 0;
let score = 0;

startBtn.addEventListener("click", clickHandler);

function clickHandler() {
  initialBlock.style.display = "none";
  questionBlock.style.display = "block";
  quesDisplay(qno);
}

nextBtn.addEventListener("click", nextFunction);

function nextFunction() {
  let chkAns = checkAnswer(qno);
  if (chkAns == true) {
    score += 2;
  }
  qno++;
  if (qno < questionArray.length) {
    quesDisplay(qno);
  } else {
    result(score);
  }
}

function quesDisplay(qno) {
  question.innerText = `${questionArray[qno].question}`;
  label1.innerText = `${questionArray[qno].answer[0]}`;
  label2.innerText = `${questionArray[qno].answer[1]}`;
  label3.innerText = `${questionArray[qno].answer[2]}`;
  label4.innerText = `${questionArray[qno].answer[3]}`;
}

function checkAnswer(qno) {
  for (i = 0; i < 4; i++) {
    if (radioBtns[i].checked) {
      console.log(radioBtns[i].value == questionArray[qno].correct);
      return radioBtns[i].value == questionArray[qno].correct;
    }
  }
  return false;
}

function result(score) {
  questionBlock.style.display = "none";
  resultDiv.innerText = `Your score: ${score} \n Your correct answers:${
    score / 2
  } `;
}
