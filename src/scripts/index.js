import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";
var clients = require("./data").clientsArray;

displayData(clients);
function displayData(clientsList = clients) {
  const ul = document.querySelector("#clientsData");
  clientsList.forEach(client => {
    ul.appendChild(getLiElement(client));
  });
  sumAmount(clientsList);
}
function getLiElement(client) {
  const newLi = document.createElement("li");
  const avatar = document.createElement("img");
  newLi.className = "media";
  avatar.className = "mr-3 align-self-center";
  avatar.setAttribute("src", client.avatar);
  newLi.appendChild(avatar);
  newLi.appendChild(createCLientDescription(client));
  return newLi;
}

function createCLientDescription(client) {
  const div = document.createElement("div");
  div.className = "media-body";
  const mailLink = document.createElement("a");
  mailLink.setAttribute("href", `mailto:${client.email}`);
  mailLink.innerHTML = client.email;
  const textPart1 = document.createTextNode(
    `${client.lastName} ${client.firstName} - `
  );
  const textPart2 = document.createTextNode(
    ` ${client.gender} (${client.date} - ${client.amount})`
  );
  div.appendChild(textPart1);
  div.appendChild(mailLink);
  div.appendChild(textPart2);

  return div;
}

function sortList(order) {
  const sortedClients = clients.sort((lastClient, nextClient) => {
    if (order == "ascending") {
      return lastClient.lastName > nextClient.lastName ? 1 : -1;
    } else {
      return lastClient.lastName < nextClient.lastName ? 1 : -1;
    }
  });
  refreshData(sortedClients);
}
function sortGender(order) {
  const sortedGender = clients.sort(client => {
    if (order == "male") {
      return client.gender;
    } else {
      console.log("female");
    }
  });
  refreshData(sortedGender);
}

function refreshData(updatedClients) {
  clearList();
  displayData(updatedClients);
}

function clearList() {
  const ul = document.querySelector("#clientsData");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function filterList() {
  const filterString = document
    .querySelector("#filterInput")
    .value.toLowerCase()
    .trim();
  if (filterString) {
    const filteredClients = clients.filter(client => {
      return (
        client.firstName
          .toLowerCase()
          .trim()
          .includes(filterString) ||
        client.lastName
          .toLowerCase()
          .trim()
          .includes(filterString) ||
        client.email
          .toLowerCase()
          .trim()
          .includes(filterString)
      );
    });
    refreshData(filteredClients);
    showDifferentSection(filteredClients);
  } else {
    refreshData(clients);
  }
}
function sumAmount(clientsList = clients) {
  const total = clientsList.reduce((amount, client) => {
    return amount + removeCurrencyFromAmount(client.amount);
  }, 0);
  document.querySelectorAll(".totalAmountContainer").forEach(element => {
    element.innerHTML = total.toFixed(2);
  });
}
function removeCurrencyFromAmount(amount) {
  return Number(amount.slice(1));
}
// function showNotFoundSection() {
//   document.querySelector(".resultList").style.display = "none";
//   document.querySelector(".notFound").style.display = "block";
// }
// function showResultListSection() {
//   document.querySelector(".resultList").style.display = "block";
//   document.querySelector(".notFound").style.display = "none";
// }

function showDifferentSection(filteredClients) {
  if (filteredClients.length === 0) {
    document.querySelector(".resultList").style.display = "none";
    document.querySelector(".notFound").style.display = "block";
  } else {
    document.querySelector(".resultList").style.display = "block";
    document.querySelector(".notFound").style.display = "none";
  }
}

window.displayData = displayData;
window.getLiElement = getLiElement;
window.sortList = sortList;
window.filterList = filterList;
window.sumAmount = sumAmount;
window.refreshData = refreshData;
window.clearList = clearList;
window.removeCurrencyFromAmount = removeCurrencyFromAmount;
// window.showNotFoundSection = showNotFoundSection;
// window.showResultListSection = showResultListSection;
window.sortGender = sortGender;
window.showDifferentSection = showDifferentSection;
