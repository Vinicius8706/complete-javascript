'use strict';

const lufhansa = {
    airline: "Lufhansa",
    iataCode: "LM",
    bookings: [],
    book(flightNum,name){
        console.log(`${name} bookead a set on ${this.airline}
        flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
    }
}

lufhansa.book(239, 'Jonas Schmedtmann')
lufhansa.book(635,'John Smith')

const eurowings ={
    name: 'Eurowings',
    iataCode: "EW",
    bookings:[]
}

const book = lufhansa.book;

book.call(eurowings,23,'Sara Williams')
console.log(eurowings)