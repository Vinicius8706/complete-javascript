'use strict';
const booking = [];

const createBooking = function (flightNum, numPassengeres = 1, price = 199 * numPassengeres) {
  // numPassengeres = numPassengeres || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengeres,
    price
  }
  console.log(booking);
}

createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123');
//When we dont set parameter on function, it will be undefined

// How passing arguments works: value vs reference

const flight = 'LH234';
const vinicius = { name: 'Vinicius Farias Silva', passport: 2123479284 };
const checkIn = function (flighNum, passenger) {
  flighNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2123479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(vinicius);
//alterando o valor do passport, o checkIn não vai funcionar, pois o valor do passport não é mais o mesmo
checkIn(flight, vinicius);

checkIn(flight, vinicius);

// First class vs high-order functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function(str,fn){
  
}