 /* There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
*/
const scoreDolphins1 = 96, scoreDolphins2 = 108, scoreDolphins3 = 89;
const scoreKoalas1 = 88, scoreKoalas2 = 91, scoreKoalas3 = 110;

// calculating the averages
const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

// checking conditions
if (avgDolphins > avgKoalas){
    console.log("Dolphins win the trophy")
} else if (avgKoalas > avgDolphins) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}