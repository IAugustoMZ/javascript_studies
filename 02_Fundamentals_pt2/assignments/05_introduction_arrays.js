/* Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not (true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.*/

// defininf the function percentageOfWorld1
const percentageOfWorld1 = population => (population / 8000) * 100;

// defining the array populations
const populations = [1441, 130, 37, 9];

// checking if the array has 4 elements
console.log(populations.length === 4);

// defining the array percentages
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

console.log(percentages);