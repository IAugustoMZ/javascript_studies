// body info from Mark and John
let massMark = 95, heightMark = 1.88;
let massJohn = 85, heightJohn = 1.76;

// BMI calculations
let BMIMark, BMIJohn;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log('BMI of Mark', BMIMark)
console.log('BMI of John', BMIJohn)

// check tests
let markHigherBMI = BMIMark > BMIJohn;

console.log("Is Mark BMI higher than John's?", markHigherBMI)