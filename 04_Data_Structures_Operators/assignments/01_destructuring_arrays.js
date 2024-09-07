/* Destructuring Arrays

1.1. Destructure the books array into two variables called firstBook and secondBook.
1.2. Destructure the books array into a variable called thirdBook. You must skip the first two books.
1.3. Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

conts ratings = [['rating', 4.19], ['ratingsCount', 144584]];

1.4. Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808]

*/
const books = ['Harry Potter', 'The Hobbit', 'The Lord of the Rings'];

// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log('Rating:', rating, 'Ratings Count:', ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log('Five Star Ratings:', fiveStarRatings, 'One Star Ratings:', oneStarRatings, 'Three Star Ratings:', threeStarRatings);