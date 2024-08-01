/* Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

/* Write your code below. Good luck! 🙂 */

const calcTip = bill => {
    //checking the condition to 15 % rate
    const conditionsto15 = (bill >= 50) && (bill <= 300)
    
    // calculating tip
    const tip = conditionsto15 ? 0.15 * bill : 0.20 * bill;
    
    return tip;
}

// testing with 100
console.log(calcTip(100))

// creating array with bills
const bills = [125, 555, 44]

// creating array with tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills)
console.log(tips)

// bonus -> array with tip + bill
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(totals)