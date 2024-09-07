/* Rest pattern and parameters

4.1. Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
4.2. Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
4.3. Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

Example
Code:

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
Expected output:

"The book "Algorithms" has 2 authors"
*/

const books = [
    {
        title: 'Harry Potter',
        author: ['J.K. Rowling'],
        ISBN: '1234567890',
        keywords: ['magic', 'fantasy'],
        bookPublisher: 'Bloomsbury',
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
        author: ['J.R.R. Tolkien'],
        ISBN: '1234567891',
        bookPublisher: 'Houghton Mifflin Harcourt',
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
        author: ['J.R.R. Tolkien'],
        ISBN: '1234567892',
        bookPublisher: 'Houghton Mifflin Harcourt',
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
        author: ['Dan Brown'],
        ISBN: '1234567893',
        bookPublisher: 'Doubleday',
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
        author: ['Dan Brown'],
        bookPublisher: 'Simon & Schuster',
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
        author: ['Dan Brown'],
        ISBN: '1234567895',
        bookPublisher: 'Doubleday',
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
        author: ['Dan Brown'],
        ISBN: '1234567896',
        bookPublisher: 'Doubleday',
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
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        bookPublisher: 'Addison-Wesley',
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

// 4.1
const firstBook = books[0];
const [mainKeyword, ...rest] = firstBook.keywords;

console.log('Main keyword:', mainKeyword);
console.log('Rest of the keywords:', rest);

// 4.2
const { bookPublisher, ...restOfTheBook } = books[1];
console.log('Book publisher:', bookPublisher);
console.log('Rest of the book:', restOfTheBook);

// 4.3
function printBookAuthorsCount(title, ...authors) {
    console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
printBookAuthorsCount('The Lord of the Rings', 'J.R.R. Tolkien');
printBookAuthorsCount('The Da Vinci Code', 'Dan Brown');