import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";

let randomNumber;
(function() {
  randomNumber = getRandomNumber(10);
  console.log(`in init ${randomNumber}`);
  const input = document.getElementById("checkField");
  const checkBtn = document.getElementById("checkBtn");

  checkBtn.addEventListener("click", () => {
    checkNumber(input, randomNumber);
  });
})();

function checkNumber(input, number) {
  if (input.value == "") {
    alert("please add number!");
  } else {
    checkValues(input, number);
  }
}
function checkValues(input, number) {
  const p = document.getElementById("status");
  if (input.value > number) {
    p.innerHTML = "Your Number is greather than Random Number!";
    p.className = "wrong";
  } else if (input.value < number) {
    p.innerHTML = "Your Number is less than Random Number!";
    p.className = "wrong";
  } else {
    p.innerHTML = `You won! I was thinking about ${number}`;
    p.className = "success";
    input.value = "";
    randomNumber = getRandomNumber(10);
    console.log(`new generation ${randomNumber}`);
  }
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
