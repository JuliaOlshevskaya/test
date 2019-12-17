import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";
import "./data";

function displayData() {
  const ul = document.querySelector("#clientsData");
  clients.forEach(client => {
    ul.appendChild(getLiElement(client));
  });
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
  ul.appendChild(newLi);
}

function sortList(order) {
  order == "ascending" ? console.log("ascending") : console.log("descending");
  const sortedClients = clients.sort((lastClient, nextClient) => {});
}

window.displayData = displayData;
window.sortList = sortList;
