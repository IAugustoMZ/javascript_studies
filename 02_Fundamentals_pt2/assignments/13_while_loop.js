/* Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

Reflect on what solution you like better for this task: the for loop or the while loop?*/

const populations = [1441, 130, 328, 273];
const percentages3 = [];
let i = 0;

const percentageOfWorld1 = function(population){
    return (population / 7900) * 100;
}

while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3); // [20.1, 1.6, 4.2, 3.5]