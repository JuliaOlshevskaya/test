function validateField(val) {
  const name = "mommy";
  if (val == name) {
    console.log("Valid");
  } else {
    console.log("Unvalid");
  }
}

function buttonClick() {
  console.log("You've bought it!");
}

function showTodaysDate() {
  alert(Date());
}

function overIcon() {
  alert("Buy now!");
}

function outIcon() {
  alert("We have lots of interesting!");
}

function onPageLoad() {
  console.log("Page has loaded");
}

window.validateField = validateField;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.overIcon = overIcon;
window.outIcon = outIcon;
window.onPageLoad = onPageLoad;
validateField();
