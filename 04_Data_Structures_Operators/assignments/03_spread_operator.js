/* Spread Operator

3.1. Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

3.2. Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

Example
Code:

spellWord('JavaScript')
Expected output:

"J a v a S c r i p t"
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
        author: ['Robert Sedgewick', 'Kevin Wayne'],
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

// 3.1
const bookAuthors = [books[0].author, books[1].author, ...books[6].author];
console.log('Book Authors', bookAuthors);

// 3.2
function spellWord(word) {
    const letters = [...word];
    console.log(letters.join(' '));
}

spellWord('JavaScript'); // "J a v a S c r i p t"
spellWord('Python'); // "P y t h o n"
spellWord('Java'); // "J a v a"