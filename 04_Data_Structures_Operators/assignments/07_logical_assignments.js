/* 
7.1. ome of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

7.2. ome of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

Use the &&= operator (tip: you may also need the ! operator)

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

// 7.1
for (const book of books) {
    book.edition ||= 1;
}

// 7.2
for (const book of books) {
    console.log(book.title, book.thirdParty.goodreads.rating, book.highlighted);
    book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
    console.log(book.title, book.thirdParty.goodreads.rating, book.highlighted);
}