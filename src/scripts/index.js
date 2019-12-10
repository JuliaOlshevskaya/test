import "../styles/index.scss";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../styles/test.scss";
import "./events";

const painters = [
  {
    firstName: "Herb",
    lastName: "Aach",
    born: 1923,
    passed: 1985,
    paintings: 12
  },
  {
    firstName: "Pacita",
    lastName: "Abad",
    born: 1946,
    passed: 2004,
    paintings: 52
  },
  {
    firstName: "Daniel",
    lastName: "Maclise",
    born: 1806,
    passed: 1870,
    paintings: 2
  },
  {
    firstName: "Aileen",
    lastName: "Eagleton",
    born: 1902,
    passed: 1984,
    paintings: 35
  },
  {
    firstName: "Thomas",
    lastName: "Eakins",
    born: 1844,
    passed: 1916,
    paintings: 1
  },
  {
    firstName: "Edgar",
    lastName: "Degas ",
    born: 1834,
    passed: 1917,
    paintings: 34
  },
  {
    firstName: "Martin",
    lastName: "Desjardins",
    born: 1637,
    passed: 1694,
    paintings: 7
  }
];

const people = [
  "Fiona, Bownd",
  "Bren, Strutt",
  "Cletis, Cobelli",
  "Booth, Kedge",
  "Demetris, Parman",
  "Cull, Itzhaki",
  "Ertha, Bikker",
  "Maggi, Stockport",
  "Horace, Hearthfield",
  "Vassili, Pomfret",
  "Cirilo, Zottoli",
  "Trueman, MacDermot",
  "Karla, Spencer",
  "Allys, McManamon",
  "Saloma, Boolsen",
  "Giacomo, Vedntyev",
  "Essa, Blacket",
  "Dari, Muncer",
  "Jobi, Joscelyn",
  "Eimile, Joberne"
];

const cars = [
  "Honda",
  "Saab",
  "Ford",
  "Mitsubishi",
  "Buick",
  "Toyota",
  "Mitsubishi",
  "Mercedes-Ben",
  "Honda",
  "Buick",
  "Volvo",
  "Oldsmobile",
  "Mercedes-Ben",
  "Chevrolet",
  "Volkswagen",
  "Honda",
  "GMC",
  "Chevrolet",
  "Jeep",
  "Acura",
  "Acura",
  "Suzuki"
];

// 1. Array Length
console.log("painters length", painters.length);
console.log("people length", people.length);
console.log("cars length", cars.length);
// 2. Array Iteration with FOR & foreach
for (let i = 0; i < painters.length; i++) {
  console.log(painters[i]);
}
painters.forEach(painter => {
  console.log(painter);
});
// 3. String to array .split
const myFavFood = "Pizza, Pasta, Burger";
console.log(myFavFood.split(", "));
const myFavSports = ["Football", "Hokkey", "Yoga"];
console.log(myFavSports.join(", "));
// 4. Array .filter()

const filteredPainters = painters.filter(
  painter => painter.born >= 1800 && painter.born < 1900
);

console.table(filteredPainters);
// 5. Array .map()
const paintersWithYears = painters.map(painter => {
  return {
    name: `${painter.firstName} ${painter.lastName}`,
    years: `${painter.born} ${painter.passed}`
  };
});
console.table(paintersWithYears);
// 6. Array .sort()
// Sort painters by years lived
const sortedPainters = painters
  .map(painter => {
    return {
      name: `${painter.firstName} ${painter.lastName}`,
      years: `${painter.born} ${painter.passed}`,
      age: painter.passed - painter.born
    };
  })
  .sort((currentPainter, nextPainter) =>
    currentPainter.age > nextPainter.age ? -1 : 1
  );
console.table(sortedPainters);
// Sort client by lastName
const sortedPeople = people.sort((lastPerson, nextPerson) => {
  const [lastPersonFirstName, lastPersonLastName] = lastPerson.split(", ");
  const [nextPersonFirstName, nextPersonLastName] = nextPerson.split(", ");
  return lastPersonLastName > nextPersonLastName ? 1 : -1;
});
console.table(sortedPeople);
// 7. Array .reduce()
// Total amound of paintings
const totalAmountOfPaintings = painters.reduce((amount, painter) => {
  return amount + painter.paintings;
}, 0);
console.log("total paintings: ", totalAmountOfPaintings);
// Sum app cars
const reducedCars = cars.reduce((object, car) => {
  if (!object[car]) {
    object[car] = 0;
  }
  object[car]++;
  return object;
}, {});
console.log(reducedCars);
