/*
8.1. Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

let pageSum = 0;

8.2. Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];

8.3. Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

Expected output
1. Robert Sedgewick
2. Kevin Wayne
3. Harold Abelson
   ...                    // part removed for clarity
15. Cal Newport

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
        },
        highlighted: true,
        pages: 400
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
        highlighted: true,
        pages: 300
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
        highlighted: true,
        pages: 1200
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
        highlighted: true,
        pages: 500
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
        highlighted: true,
        pages: 600
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
        highlighted: true,
        pages: 550
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
        highlighted: true,
        pages: 700
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
        highlighted: true,
        pages: 1000
    }
];

// 8.1
let pageSum = 0;
for (const book of books) {
    pageSum += book.pages;
}

console.log("Total pages: ", pageSum);

// 8.2
const allAuthors = [];
for (const book of books) {
    if (typeof book.author === 'string') {
        allAuthors.push(book.author);
    } else {
        allAuthors.push(...book.author);
    }
}

console.log(allAuthors);

// 8.3
for (const [index, author] of allAuthors.entries()) {
    console.log(`${index + 1}. ${author}`);
}