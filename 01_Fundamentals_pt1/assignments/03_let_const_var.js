const country = 'Brazil'; // never changes
const continent = 'South America'; // never changes
const language = 'portuguese'; // never changes
const isIsland = false; // never changes
let population = 213.5; // changes

console.log('Assignment 3 - Let, Const, Var ---------------------------');
console.log('Country:', country, typeof country);
console.log('Continent:', continent, typeof continent);
console.log('Population:', population, typeof population);
console.log('Is Island:', isIsland, typeof isIsland);
console.log('Language:', language, typeof language);

population = 214.5;
console.log('Population:', population, typeof population);

country = 'Brasil'; // error
