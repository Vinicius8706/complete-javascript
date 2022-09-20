"use strict";
function logger() {
  console.log("My name is jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log();

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//keep your code dry dont repeat yourselves

//Function declarations and expressions
//generic function
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
calcAge1(1997);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// functions are like vale but is not type and we can store than in a variable

const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function is a shorter form but faster to write
// are excellent for function of one line
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge1(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Vinicius"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples ${orangePieces}and pieces of oranges`;
}

fruitProcessor(2, 3);

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 23, 71);

function checkWinner() {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolphins wins(${avgDolhins} vs. ${avgKoalas})`);
  } else if(avgKoalas>= avgDolhins*2){
    console.log(`Koalas wins(${avgKoalas} vs. ${avgDolhins})`);
  }
}
