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

book.call(lufhansa,239,'Mary Cooper')
console.log(lufhansa)

const swiss = {
    name: 'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

book.call(swiss,583,'Mary Cooper')
console.log(swiss)

const flightData = [583,'George Cooper']

book.apply(swiss,flightData)

book.call(swiss,...flightData)

//Bind method


book.bind(eurowings)