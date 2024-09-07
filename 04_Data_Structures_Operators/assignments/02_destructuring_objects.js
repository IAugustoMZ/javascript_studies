/* Destructuring objects

2.1. Destructure the first book object from the books array into variables called title, author and ISBN.
2.2. Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
2.3. he seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
2.4. Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

2.5. Each book object has a deeply nested rating property as illustrated below:

{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},
Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];

2.6. Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

Example: printBookInfo({ title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }) should log 'The Hobbit by J.R.R. Tolkien, 1937'.
*/

const books = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        ISBN: '1234567890',
        keywords: ['magic', 'fantasy'],
        thirdParty: {
            goodreads: {
                rating: 4.5,
                ratingsCount: 100000,
                reviewsCount: 5000,
                fiveStarRatingCount: 80000,
                oneStarRatingCount: 1000
            }
        }
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        ISBN: '1234567891',
        keywords: ['adventure', 'fantasy'],
        thirdParty: {
            goodreads: {
                rating: 4.3,
                ratingsCount: 80000,
                reviewsCount: 4000,
                fiveStarRatingCount: 60000,
                oneStarRatingCount: 2000
            }
        }
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        ISBN: '1234567892',
        keywords: ['adventure', 'fantasy'],
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 120000,
                reviewsCount: 6000,
                fiveStarRatingCount: 90000,
                oneStarRatingCount: 500
            }
        }
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        ISBN: '1234567893',
        keywords: ['mystery', 'thriller'],
        thirdParty: {
            goodreads: {
                rating: 4.2,
                ratingsCount: 90000,
                reviewsCount: 4500,
                fiveStarRatingCount: 70000,
                oneStarRatingCount: 1500
            }
        }
    },
    {
        title: 'Angels & Demons',
        author: 'Dan Brown',
        ISBN: '1234567894',
        keywords: ['mystery', 'thriller'],
        thirdParty: {
            goodreads: {
                rating: 4.1,
                ratingsCount: 85000,
                reviewsCount: 4250,
                fiveStarRatingCount: 65000,
                oneStarRatingCount: 1750
            }
        }
    },
    {
        title: 'Inferno',
        author: 'Dan Brown',
        ISBN: '1234567895',
        keywords: ['mystery', 'thriller'],
        thirdParty: {
            goodreads: {
                rating: 4.0,
                ratingsCount: 95000,
                reviewsCount: 4750,
                fiveStarRatingCount: 75000,
                oneStarRatingCount: 1250
            }
        }
    },
    {
        title: 'Origin',
        author: 'Dan Brown',
        ISBN: '1234567896',
        keywords: ['mystery', 'thriller'],
        thirdParty: {
            goodreads: {
                rating: 4.4,
                ratingsCount: 87500,
                reviewsCount: 4375,
                fiveStarRatingCount: 67500,
                oneStarRatingCount: 1875
            }
        }
    },
    {
        title: 'Algorithms',
        author: 'Robert Sedgewick',
        ISBN: '1234567897',
        keywords: ['computer science', 'algorithms'],
        programmingLanguage: 'C++',
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        }
    }
];

// 2.1
firstBook = books[0];
const { title, author, ISBN } = firstBook;
console.log('Title:', title, 'Author:', author, 'ISBN:', ISBN);

// 2.2
const { keywords: tags } = firstBook;
console.log('Tags:', tags);

// 2.3
const { programmingLanguage = 'unknown' } = books[6];
console.log('Programming Language:', programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log('Book Title:', bookTitle, 'Book Author:', bookAuthor);

// 2.5
const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
console.log('Book Rating:', bookRating);

// 2.6
function printBookInfo({ title, author, year = 'year unknown' }) {
    console.log(`${title} by ${author}, ${year}`);
}
printBookInfo(books[0]);
printBookInfo(books[1]);
printBookInfo(books[2]);