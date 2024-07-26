// if your country's population is grater than 33 million, log a string like this to the console: 'Portugal's population is 22 above average'.
const country = 'Portugal';
const continent = 'Europe';
const population_pt = 11;
const language = 'portuguese';
const avgPopulation = 33;

// log the description
console.log('Assignment 6 - If/Else Conditionals ---------------------------');
const description = `${country} is in ${continent}, and its ${population_pt} million people speak ${language}`;
console.log(description);

// log the population comparison
if (population_pt > avgPopulation) {
    console.log(`${country}'s population is ${population_pt - avgPopulation} above average`);
} else {
    console.log(`${country}'s population is ${avgPopulation - population_pt} below average`);
}
