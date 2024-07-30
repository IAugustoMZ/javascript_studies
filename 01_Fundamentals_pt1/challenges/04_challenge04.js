const bill = 275;

/* Write your code below. Good luck! 🙂 */
// check which tip rate will be applied
const tip_criterion = (bill >= 50) && (bill <= 300)

// calculate tip
const tip = tip_criterion ? 0.15 * bill : 0.2 * bill

// log results
const message = `The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`
console.log(message)