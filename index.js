"use strict";
//-------------------------------------------PART-2------------------------------------

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"]
// ];

// for (let index = 0; index < listOfNeighbours.length; index++)
//   for (let i = 0; i < listOfNeighbours[index].length; i++)
//     console.log(`Neighbour: ${listOfNeighbours[index][i]}`);

// const populations = [1400, 33, 7.8, 6.7];
// const totalPopulation = 7900;
// const percentages2 = [];
// const percentages3 = [];
// function percentageOfWorld1(population) {
//   return (population / totalPopulation) * 100;
// }

// for (let index = 0; index < populations.length; index++) {
//   percentages2.push(percentageOfWorld1(populations[index]));
// }

// let index = 0;

// while (index < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[index]));
//   index++;
// }

// console.log(percentages2);
// console.log(percentages3);

// let dice = Math.ceil(Math.random() * 6);

// while (dice !== 6) {
//   console.log(`You rolled ${dice}`);
//   dice = Math.ceil(Math.random() * 6);
// }

// console.log("Hey, you got the 6 and you 🏆");

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     const arr = [];
//     for (let k = 1; k <= 3; k++) {
//       arr.push(`${k}\\`);
//     }
//     console.log(`${j}-${arr}`);
//   }
// }

// const subash = [
//   "Subash",
//   "Chandra",
//   2022 - 1990,
//   "UI Engineer",
//   ["Ram", "Shayam", "Krishana"],
//   true
// ];

// const types = [];

// for (let i = 0; i < subash.length; i++) {
//   types.unshift(typeof subash[i]);
//   console.log(subash[i], types[i]);
// }

// console.log(types);

//for loop keeps running while condition check is TRUE
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// const subash = {
//   fullName: "Subash Chandra",
//   mass: 67,
//   height: 1.6,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this, this.bmi;
//   }
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this, this.bmi;
//   }
// };

// console.log(subash.calcBMI());
// console.log(subash.bmi);
// console.log(mark.calcBMI());
// console.log(mark.bmi);

// if (mark.bmi > subash.bmi) {
//   console.log(
//     `${mark.fullName}'s bmi ${mark.bmi} is heigher than ${subash.fullName}'s bmi ${subash.bmi}.`
//   );
// } else {
//   console.log(
//     `${subash.fullName}'s bmi ${subash.bmi} is heigher than ${mark.fullName}'s bmi ${mark.bmi}.`
//   );
// }

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Hindi",
//   population: 1400,
//   neighbours: [
//     "Afganistan",
//     "Bangladesh",
//     "Bhutan",
//     "China",
//     "Maldives",
//     "Mayanmar",
//     "Nepal",
//     "Pakistan",
//     "Shri Lanka"
//   ],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length > 0 ? false : true;
//     return this.isIsland;
//   }
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);
// console.log(myCountry.isIsland);
// console.log(myCountry.isIsland);
// console.log(myCountry.isIsland);

// const neighbours = [
//   "Afganistan",
//   "Bangladesh",
//   "Bhutan",
//   "China",
//   "Nepal",
//   "Pakistan",
//   "Shrilanka",
//   "Maldives",
//   "Mayanmar"
// ];

// neighbours.push("Utopia");
// neighbours.pop("Utopia");

// const index = neighbours.indexOf("Pakistan");

// neighbours[index] = "Turkmanistan";

// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// const subash = {
//   firstName: "Subash",
//   lastName: "Chandra",
//   birthYear: 1990,
//   job: "UI developer",
//   friends: ["Satoo", "Kariya", "Sankata"],
//   isGraduate: false,
//   hasDriversLicence: false,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   about: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he ${
//       this.hasDriversLicence ? "has" : "does not have"
//     } driver's licence`;
//   }
// };

// console.log(subash.calcAge());
// console.log(subash.about());

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose among firstName, lastName, age, job, isGraduate, and friends?"
// );

// if (subash[interestedIn] !== undefined) {
//   console.log(subash[interestedIn]);
// } else {
//   console.log(`Subash does not have the ${interestedIn} attribute!`);
// }

// console.log(
//   `Jonas has ${subash.friends.length} friends, and his best friend is ${subash.friends[0]}`
// );

// const totalPopulation = 7900;
// const percentageOfWorld3 = (population) => (population / totalPopulation) * 100;
// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(
//     population
//   ).toFixed(2)}% of the world.`;
// }

// console.log(describePopulation("India", 1400));

// const populations = [140, 33, 7.8, 6.7];

// console.log(percentageOfWorld1(1441));

// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//   return (population / totalPopulation) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / totalPopulation) * 100;
// };

// const percentages = populations.map(percentageOfWorld1);

// console.log(percentages);
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld3(1441));

// const friends = ["Ram", "Rahim", "Raja"];

// console.log(friends.push("Kariya"));
// console.log(friends.unshift("shayam"));
// console.log(friends.pop());
// console.log(friends.shift());

// console.log(friends.indexOf("Ram"));
// console.log(friends.includes("Ram"));

// const calculateAvg = (a, b, c) => (a + b + c) / 3;

// console.log(calculateAvg(1, 2, 3));

// function countryDescription(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//     capital city is ${capitalCity}`;
// }

// console.log(countryDescription("India", 140, "Delhi"));
// console.log(countryDescription("UK", 7, "London"));
// console.log(countryDescription("Rusia", 14.5, "Moscow"));

// logger("This is function declaration");
// function logger(input, type = "") {
//   switch (type) {
//     case "error":
//       console.log(`%c${input}`, "color: red");
//       break;
//     case "warning":
//       console.log(`%c${input}`, "color: orange");
//       break;
//     default:
//       console.log(`%c${input}`, "color:#2b8a3e");
//   }
// }

// logger("Hello world!");
// logger("My name is subash chandra", "error");
// logger("You should use strict mode", "warning");

// var fruitProcessor = function (apples, oranges) {
//   return `Juice with ${apples} apples and ${oranges} oranges`;
// };

// const myJuice = fruitProcessor(3, 4);
// const yourJuice = fruitProcessor(6, 2);

// logger(myJuice);
// logger(yourJuice);

// const interface = "Amount";

// console.log(interface);
//-------------------------------------------PART-1------------------------------------

//population in million

// const population = 13;

// population > 33
//   ? console.log("India's population is above average")
//   : console.log("India's population is below average");

// const firstTeamAvg = (96 + 108 + 89) / 3;
// const secondTeamAvg = (88 + 91 + 100) / 3;

// if (firstTeamAvg === secondTeamAvg) {
//   console.log("There is draw!");
// } else if (firstTeamAvg > secondTeamAvg) {
//   console.log("First team wins!");
// } else {
//   console.log("Second team wins!");
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// const age = "18";

// if (age == 18) {
//   console.log("You just became an adult! (loose)");
// }

// if (age === 18) {
//   console.log("You just became an adult! (strict)");
// }

// const favorite = prompt("What's your favorite number?");

// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool 23 is an ashtonishing number");
// } else {
//   console.log("You entered other than 23");
// }

// const firstName = "Subash";
// const lastName = "Chandra";
// const job = "Software Engineer";
// const birthYear = 1996;
// const now = 2022;

// const subash =
//   "I'm " +
//   firstName +
//   " " +
//   lastName +
//   ", a " +
//   (now - birthYear) +
//   " year old \n" +
//   job +
//   ".";

// const subash2 = `I'm ${firstName} ${lastName},\na ${
//   now - birthYear
// } year old ${job}.`;

// console.log(subash);
// console.log(subash2);

// const markHeight = 1.1;
// const markWeight = 68;
// const johnHeight = 1.05;
// const johnWeight = 99;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
// }

// let x, y;

// x = y = 10 - 5;

// console.log(x, y);

//Primitive types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt

// const myLuckyNumber = 786;
// const myFirstName = "Subash";
// const amIIndian = true;
// let mySalaryIn2025;
// console.log(myLuckyNumber);
// console.log(myFirstName);
// console.log(amIIndian);
// console.log(typeof mySalaryIn2025);
// console.log(typeof mySalaryIn2025?.hello);
// console.log(typeof hello);
