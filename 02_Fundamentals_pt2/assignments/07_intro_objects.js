/* Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
*/

// defining the object myCountry
const myCountry = {
    country: 'Brazil',
    capital: 'Brasília',
    language: 'Portuguese',
    population: 213,
    neighbours: ['Venezuela', 'Colombia', 'Bolivia'],
    isIsland: false,

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.isIsland? 0 : this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    }
}