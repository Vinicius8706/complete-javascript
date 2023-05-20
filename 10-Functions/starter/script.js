'use strict';
const booking = [];

const createBooking = function (flightNum,numPassengeres,price){
  numPassengeres = numPassengeres || 1;
  price = price || 199;
  const booking = {
    flightNum,
    numPassengeres,
    price
  }
  console.log(booking);
}

createBooking('LH123');