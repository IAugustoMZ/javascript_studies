// declare a variable numNeighbors based on a prompt input
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?
// the inputs are strings and the comparison is strict so it will not work

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1. -> it works, because the comparison is strict and the input is a number

// Reflect on why we should use the === operator and type conversion in this situation.
let numNeighbors = Number(prompt('How many neighbors does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}