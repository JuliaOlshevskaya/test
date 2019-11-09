import "../styles/index.scss";
import "../styles/test.scss";

const a = 12;
const b = 4;
const addition = a + b;
console.log(addition);
const subtraction = a - b;
console.log(subtraction);
const division = a / b;
console.log(division);
const multiplication = a * b;
console.log(multiplication);

const user = {
  name: "Julia",
  surname: "Faer",
  birthday: "20.01.2000",
  age: 19,
  height: 1.68,
  favouriteFood: ["salad", "chicken", "cake"],
  pet: true,
  getNameSurnameBirthday: function() {
    console.log(
      "getNameSurnameBirthday",
      this.name + " " + this.surname + " " + this.birthday
    );
  }
};
console.log(user);
user.getNameSurnameBirthday();
