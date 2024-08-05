const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  // array with 10 bills
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  // empty arrays
  const tips = [];
  const totals = [];
  
  // loop to calculate tips
  for (let i = 0; i < bills.length; i++){
      tips.push(calcTip(bills[i]));
      totals.push(bills[i] + tips[i]);
  }
  
  // logging results
  console.log('Bills: ', bills);
  console.log('Tips: ', tips);
  console.log('Totals: ', totals);