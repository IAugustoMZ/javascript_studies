/*
11.1. Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

In the end, the entries array should be filled with arrays containing keys:

[['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]
const entries = [];

11.2. The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

Push each value to the appropriate inner array in the entries array (use index from entries()).

11.3. Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

11.4. Log the entries and entries2 variables to the console, and compare them. They should look the same. */

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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
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
        },
        highlighted: true
    }
];

// 11.1
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([key]);
}

console.log(entries);

// 11.2
for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
    entries[index].push(value);
}

console.log(entries);

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

console.log(entries2);

// 11.4
console.log(entries);
console.log(entries2);