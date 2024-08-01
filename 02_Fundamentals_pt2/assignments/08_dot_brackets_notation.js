/* Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.*/

// create the string
const exp = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`;

console.log(exp);

// increase the population by 2 million
myCountry.population += 2;

console.log(myCountry.population);

// decrease the population by 2 million
myCountry['population'] -= 2;

console.log(myCountry.population);