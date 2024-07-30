/*
If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

const country = 'Brazil';
const population = 213;
const population_criterion = 33;

const population_message = population > population_criterion ? `${country}'s population is above average` : `${country}'s population is below average`;

console.log(population_message);