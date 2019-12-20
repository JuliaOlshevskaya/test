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
  const div = document.createElement("div");
  newLi.className = "media";
  avatar.className = "mr-3 align-self-center";
  div.className = "media-body";
  avatar.setAttribute("src", client.avatar);
  const text = document.createTextNode(
    `${client.lastName} ${client.firstName} - ${client.email}, ${client.gender} (${client.date} - ${client.amount})`
  );
  div.appendChild(text);
  newLi.appendChild(avatar);
  newLi.appendChild(div);
  return newLi;
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
          .includes(filteredClients) ||
        client.lastName
          .toLowerCase()
          .trim()
          .includes(filteredClients) ||
        client.email
          .toLowerCase()
          .trim()
          .includes(filteredClients)
      );
    });
    refreshData(filteredClients);
  } else {
    refreshData(clients);
  }
}

function sumAmount(clientsList = clients) {
  const total = clientsList.reduce((amount, client) => {
    return amount + removeCurrencyFromAmount(client.amount);
  }, 0);
  document.querySelectorAll("totalAmountContainer").forEach(element => {
    element.innerHTML = total.toFixed(2);
  });
}
function removeCurrencyFromAmount(amount) {
  return Number(amount.slice(1));
}

window.displayData = displayData;
window.getLiElement = getLiElement;
window.sortList = sortList;
window.filterList = filterList;
window.sumAmount = sumAmount;
window.refreshData = refreshData;
window.clearList = clearList;
window.removeCurrencyFromAmount = removeCurrencyFromAmount;
