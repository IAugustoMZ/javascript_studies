/* Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.*/

const percentageOfWorld3 = population => `This country represents ${population / 7900 * 100} % of the world population`;

const brazil3 = percentageOfWorld3(213);
const usa3 = percentageOfWorld3(328);
const australia3 = percentageOfWorld3(25);

console.log(brazil3);
console.log(usa3);
console.log(australia3);