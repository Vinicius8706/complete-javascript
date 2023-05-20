'use strict';
const booking = [];

const createBooking = function (flightNum, numPassengeres = 1, price = 199) {
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