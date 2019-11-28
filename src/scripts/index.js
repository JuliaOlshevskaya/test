import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

(function() {
  importantAndUrgent = document.getElementById("importantAndUrgent");
  importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
  notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
  notImportantAndNotUrgent = document.getElementById(
    "notImportantAndNotUrgent"
  );

  const quadrants = [
    importantAndUrgent,
    importantAndNotUrgent,
    notImportantAndUrgent,
    notImportantAndNotUrgent
  ];

  quadrants.forEach(quadrant => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
    quadrant.addEventListener("click", () => {});
  });
})();

function addNewTask(quadrantElement) {
  const value = getInputValue(quadrantElement);
  if (value) {
    addNewItem(value, quadrantElement);
  } else {
    alert("Please,write down your task");
  }
}

function getInputValue(quadrant) {
  return quadrant.getElementsByClassName("input-for-new-tasks")[0].value;
}
function addNewItem(value, quadrant) {
  const listWithToDoTasks = quadrant.getElementsByClassName("todoList")[0];
  const newLi = getListWithText(value);
  listWithToDoTasks.appendChild(newLi);
}
function getListWithText(value) {
  const newListItem = document.createElement("li");
  const checkbox = getCheckbox();
  const textOfNewListItem = document.createTextNode(" " + value);
  const space = document.createTextNode("  ");
  const icon = getDeleteIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(textOfNewListItem);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  return newListItem;
}
function getCheckbox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}
function getDeleteIcon() {
  const i = document.createElement("i");
  i.className = "fas fa-trash-alt";
  return i;
}
