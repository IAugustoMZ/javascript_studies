/*
The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
*/
const percentageOfWorld1 = function(population){
    const frac = (population / 7900) * 100;
    return `This country represents ${frac} % of the world population`;
}

const brazil = percentageOfWorld1(213);
const usa = percentageOfWorld1(328);
const australia = percentageOfWorld1(25);

console.log(brazil);
console.log(usa);
console.log(australia);

const percentageOfWorld2 = function(population){
    return `This country represents ${population / 7900 * 100} % of the world population`;
}

const brazil2 = percentageOfWorld2(213);
const usa2 = percentageOfWorld2(328);
const australia2 = percentageOfWorld2(25);

console.log(brazil2);
console.log(usa2);
console.log(australia2);