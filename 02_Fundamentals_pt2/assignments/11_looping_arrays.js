/* Let's bring back the populations array from a previous assignment.

Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.*/

const populations = [1441, 130, 328, 273];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageWorld1(populations[i]));
}

console.log(percentages2); // [20.1, 1.8, 4.5, 3.7]
