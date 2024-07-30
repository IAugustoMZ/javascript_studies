/*
Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.
*/

const percentageOfWorld = population => population / 7900 * 100;

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

console.log(describePopulation('China', 1441));
console.log(describePopulation('Brazil', 213));
console.log(describePopulation('USA', 328));