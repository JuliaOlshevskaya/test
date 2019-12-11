import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";

const age = 17;
age >= 18 && age <= 21
  ? console.log(
      "I am younger than 21, so you can see this masage in your console"
    )
  : console.log("I am 18, or even older!");

// 1) Проверьте переменную age и если возраст больше или равен 18 и меньше или равен 21, выведите в консоль соответсвующее сообщение

const users = [
  {
    name: "Roman",
    age: 28,
    visitedPark: true,
    boughtItems: false
  },
  {
    name: "Maya",
    age: 14,
    visitedPark: false,
    boughtItems: true
  },
  {
    name: "Alex",
    age: 45,
    visitedPark: false,
    boughtItems: false
  },
  {
    name: "Tonia",
    age: 32,
    visitedPark: true,
    boughtItems: true
  }
];

users.forEach(user => {
  if (user.visitedPark || user.boughtItems) {
    console.log("I was in the park, or made a shopping");
  } else {
    console.log("I was at home, and did not make any shopping");
  }
});

// 2) Для каждого элемента массива users выведите сообщение в консоль, только если пользователь посетил парк или совершил покупку
// Используйте foreach или for, а потом if внутри петли

let iterationCounter = "Each iteration adds a *: ";
for (let i = 0; i <= 10; i++) {
  iterationCounter += " *";
}
console.log(iterationCounter);
// 3) Используя assigment operator(+=) поменяйте значение переменоой iterationCounter, добавляя по одной звездочке при каждой итерации

// 4) Выведите в консоль значение iterationCounter. Ожидаемый результат "Each iteration adds a *: * * * * * * * * * *"
