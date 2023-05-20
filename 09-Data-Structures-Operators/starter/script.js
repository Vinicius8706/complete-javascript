'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
  },
  [weekdays[4]]: {
    fri: {
      open: 11,
      close: 23,
    },
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[this.mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Use any data type, return ANY data type, short circuting
console.log(3 || 'Jonas');
console.log(undefined || null);
console.log(true || 0);
console.log('' || 'Jonas');

// const arr = [2, 3, 4]

const a = arr[0];
const [x, y, z] = arr;
// const [main, , secondary] = restaurant.categories
console.log(main, secondary);
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary)[
  //Switching variables
  (main, secondary)
] = [secondary, main];
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
const nested = [2, 4, [5, 6]];
const [i, [j, k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8, 9];
console.log(p, q, r);
// Destructure objects

const { name, openingHours, categories } = restaurant;
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }(({ a, b } = obj));

//nested objects = objetos aninhados

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
const arr2 = [7, 8, 9];
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArray);

//Spread operator

const newArray = [1, 2, ...arr2];
// expand this array to all results
console.log(newArray);

const mainMenuCopy = [...restaurant.mainMenu];

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

//iterables: arrays, strings,maps,sets.not objects

const str = 'Jonas';
const letters = [...str, '', 'S.'];
//console.log(`${...str}Schmedtmann`)
//Real world example
// const ingredients = [prompt('Let\'s make past! Ingredient 1'), prompt('Ingredient 2?'), prompt('Ingredient 3')]

// console.log(ingredients)
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// restaurant.orderPasta(...ingredients)

const newRestaurant = { foundeIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//spread, because on right side of =
const arr3 = [1, 2, 3, ...[3, 4]];
// rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log('---AND----');
console.log(0 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

const guests = restaurant.numGuests || 10;
console.log(guests);
//Nullish: null and undefined( not 0 Or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = { name: 'Capri', numGuests: 20 };

const rest2 = { name: 'La Piazza', owner: 'Giovanni Rossi' };
rest1.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest2.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.owner = rest2.owner ** '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

///////////////////////////////////////

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
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldPlayers] = players1;
//3
const allPlayers = [...players1, ...players2];
//4
const players1Final = [...players1, 'Thiago', 'Nenê', 'Coutinho'];

//5
const {
  odds: { team, x: draw, team2 },
} = game;

//6
const printGoals = function (...players) {
  console.log(`${players.length} goals are scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
//When this is true this will continue
team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 2 is more likely to win');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//Optional chaining

console.log(restaurant.openingHours.mon);

if (restaurant.openingHours ** restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//Se a propriedade estiver antes do ponto de interrogação a propriedade open será lida
console.log(restaurant.openingHours.mon?.open);
// Se openingHours nem existir a propriedade monday nao sera lida
console.log(restaurant.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const days of day) {
  console.log(day);
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
if (users.length > 0) console.log(users[0].name);
console.log(users[0].name ?? 'User array empty');
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length}`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}.`;
}

const values = Object.values(openingHours);

Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(entries);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// 1
for (conts[(i, player)] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
// 2
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= Object.values(game.odds);
console.log(average);

// 3
// print the team and the odd
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'dram' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}${odd}`);
}

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlid Bread');
ordersSet.delete('Risotto');
// console.log(ordersSet[0])
for (const order of ordersSet) console.log(order);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);
// Mapa é uma estrudtura de dados que podemos usar para mapear valores para chaves
const rest = new Map();
rest.set('name', 'Classe Italiano');
console.log(rest.set(2, 'Lisbon,Portugal'));
rest
  .set('categories', ['Organic', 'Italian', 'Pizzeria', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D');
rest.get('name');
console.log(rest.get(1));
rest.get(time > rest.get('open') && time < rest.get('close'));
conosle.log(rest.has('categories'));
rest.delete(2);
const time = 21;
console.log(rest.size);
rest.clear();
const arr = [1, 2];
console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Javascript'],
  [3, 'Java'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
question.get(question.get('correct') === answer);

console.log([...question]);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
//2
gameEvents.delete(64);

//3

const time = [...gameEvents.keys()];
console.log(`An event happened, every ${time / gameEvents.size} minutes`);
console.log(time);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[HALF] ${min}: ${event}`)
}

//Working with strings

const airplane = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B737'[0])
console.log(airline.length)
console.log('B737'.length)
console.log(airling.indexOf('r'))
console.log(airling.lastIndexOf('r'))
console.log(airline.indexOf('portugal'))
console.log(airline.slice(4))

console.log(airline.slice(4, 7))
console.log(airline.slice(airline.lastIndexOf(' ')))

console.log(airline.slice(-2))
//started at position one and cuts off the last character
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E') console.log('You got the middle seat')
  else console.log('You got lucky')

}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

console.log(new String('jonas'))
console.log(typeof new String('jonas'))

console.log(typeof new String('jonas').slice(1))

//Working with strings

console.log(airline.toLowerCase())
console.log(airline.toUpperCase());

const passenger = 'jOnAs'
const passengerLower = passenger.toLowerCase()

const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower[1].slice(1)
console.log(passengerCorrect)

//Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io  \n'

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)
const normalizedEmail = loginEmail.toLowerCase()
console.log(normalizedEmail)
console.log(email === normalizedEmail)


//replacing
const priceGB = '288,97E'

const priceUS = priceGB.replace('E', '$')

const announcement = "All passengers come to boarding door 23. Boarding door 23"

console.log(announcement.replace("door"), 'gate')
console.log(announcement.replaceAll(/door/g, "gate"))

const plane = 'A32neo'
console.log(plane.includes('A320'))
console.log(plane.includes('Boeing'))
console.log(plane.includes('Air'))

if (plane.startsWith("Airbus") && plane.endsWith(neo)) {
  console.log("Part of the NEW Airbus family")
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log("You are not allowed on board")
  } else {
    console.log("Welcome aboard!")
  }
}

checkBaggage("I have a laptop, some foof and a pocket knife")
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')

//Split string in multipal parts

console.log('a+very+nice+string'.split('+'))
console.log("Jonas Schmedtmann".split(" "))

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')
['Mr.', firstName, lastName.toUpperCase()].join(' ')
consolew.log(newName)

const capitalizeName = function (name) {
  const names = name.split(" ")
  const namesUpper = []
  for (const n of names) {
    namesUpper.push(n.replace[0],n[0].toUpperCase)
  }
}

capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtamnn')

const message = 'Go to gate 23'

console.log(message.padStart(25,"+").padEnd(30,"+"))

console.log('Jonas'.padStart(20,"+").padEnd(30,"+"))

const maskCreditCard = function(number){
  const str = number +  "";
  const last = str.slice(-4)
  return last.padStart(str.length,"*")
}

console.log(maskCreditCard(4333230849234890))
maskCreditCard('3294i38901123908')

//Repeat -> repitir a string varias vezes

const message2 = 'Bad weather... All Departues Delayed...'
console.log(message2.repeat(5))

const placesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🤷‍♀️'.repeat(n)}`)


}

planesInLIne(5)
planesInline(3)
planesInLine(12)


///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click',function(){
  const text =document.querySelector('textarea').value
  const rows = text.split("\n")
  console.log(rows)

  for(const [i,row] of rows){
    row.toLowerCase().trim().split('_')
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)})`)
  }
})