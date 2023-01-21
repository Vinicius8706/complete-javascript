'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear
  function printAge() {
    const output = `You are ${age},born in ${birthYear}`
    console.log(output);
  }
  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true
    const str = `Oh, and you're a millenial ${firstName}`
    console.log(str)

    function add(a, b) {
      return a + b;

    }
  }
  console.log(millenial);
  printAge()
  return age
}


const firstName = 'Jonas'
calcAge(1991)

const jonas = {
  year: 1991, calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },
  greet: () => console.log(`Hey ${this.firstName}`)


}
jonas.greet()
jonas.calcAge()

const matilda = {
  year: 2017
}

matilda.calcAge = jonas.calcAge
matilda.calcAge()

const f = jonals.calcAge
f()
//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b;
}
addExpr(2, 5)

let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage:', jessica)
console.log('After marriage', marriedJessica)

//merge two objects
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
console.log('Before marriage:', jessica2)
console.log('After marriage:', jessicaCopy)

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
