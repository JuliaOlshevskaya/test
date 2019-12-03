import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

importantAndUrgent = document.getElementById("importantAndUrgent");
importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
notImportantAndNotUrgent = document.getElementById("notImportantAndNotUrgent");

const quadrants = [
  importantAndUrgent,
  importantAndNotUrgent,
  notImportantAndUrgent,
  notImportantAndNotUrgent
];
changingCheckboxes(quadrants);
removeTask(quadrants);

quadrants.forEach(quadrant => {
  const button = quadrant.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    addButtonClicked(quadrant);
  });
  listeningCheckboxForReplace(quadrant);
});

function addButtonClicked(quadrant) {
  addNewTask(quadrant);
  changingCheckboxes(quadrants);
  listeningCheckboxForReplace(quadrant);
  removeTask(quadrants);
  quadrant.getElementsByClassName("input-for-new-tasks")[0].value = " ";
}

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
  const checkbox = createCheckbox();
  const textOfNewListItem = document.createTextNode(" " + value);
  const space = document.createTextNode("  ");
  const icon = getDeleteIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(textOfNewListItem);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  return newListItem;
}
function createCheckbox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "active-checkbox";
  return input;
}
function getDeleteIcon() {
  const span = document.createElement("span");
  const i = document.createElement("i");
  i.className = "fas fa-trash-alt";
  span.className = "trash-icon";
  span.appendChild(i);
  return span;
}

function changingCheckboxes(quadrants) {
  quadrants.forEach(quadrant => {
    const collectionOfCheckboxes = quadrant.getElementsByClassName(
      "active-checkbox"
    );
    collectionOfCheckboxes.forEach(activeCheckbox => {
      activeCheckbox.parentNode.addEventListener("click", () => {
        activeCheckbox.parentNode.style.textDecoration = "line-through";
        activeCheckbox.checked = true;
      });
    });
  });
}

function removeTask(quadrants) {
  quadrants.forEach(quadrant => {
    const collectionOfIcons = quadrant.getElementsByClassName("trash-icon");
    collectionOfIcons.forEach(deletingIcon => {
      deletingIcon.addEventListener("click", () => {
        deletingIcon.parentNode.style.display = "none";
      });
    });
  });
}

function markAsDone(event) {
  const checkbox = event.target;
  const parentOfCheckbox = checkbox.parentElement;
  parentOfCheckbox.remove();
}

function replaceTaskToDone(inputElement, quadrantElement) {
  const deletedTaskFromLi = inputElement.parentElement;
  const listWithDoneTasks = quadrantElement.getElementsByClassName(
    "doneList"
  )[0];
  listWithDoneTasks.appendChild(deletedTaskFromLi);
}

function listeningCheckboxForReplace(quadrant) {
  const checkboxesInToDo = quadrant.getElementsByClassName("todoList")[0];
  const checkboxesInDoneList = quadrant.getElementsByClassName("doneList")[0];
  const checkboxesFromToDo = checkboxesInToDo.querySelectorAll(
    "input[type='checkbox']"
  );
  const checkboxesFromDone = checkboxesInDoneList.querySelectorAll(
    "input[type='checkbox']"
  );

  checkboxesFromToDo.forEach(input => {
    input.addEventListener("click", event => {
      markAsDone(event);
      replaceTaskToDone(input, quadrant);
    });
  });

  checkboxesFromDone.forEach(input => {
    input.addEventListener("click", event => {
      replaceTaskIntoToDo(input, quadrant);
      markAsToDo(event);
    });
  });
}

function markAsToDo(event) {
  const checkbox = event.target;
  const parentOfCheckbox = checkbox.parentElement;
  parentOfCheckbox.remove();
}

function replaceTaskIntoToDo(inputElement, quadrantElement) {
  const deletedTaskFromDone = inputElement.parentElement;
  const listWithToDoTasks = quadrantElement.getElementsByClassName(
    "todoList"
  )[0];
  listWithToDoTasks.appendChild(deletedTaskFromDone);
}
