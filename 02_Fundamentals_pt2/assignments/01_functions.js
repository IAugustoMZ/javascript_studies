/*
Write a function called describeCountry which takes three parameters: country, population and capitalCity.

Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
*/
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const brazil = describeCountry('Brazil', 213, 'Brasília');
const usa = describeCountry('USA', 328, 'Washington D.C.');
const australia = describeCountry('Australia', 25, 'Canberra');

console.log(brazil);
console.log(usa);
console.log(australia);