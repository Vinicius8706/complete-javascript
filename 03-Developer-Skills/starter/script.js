// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// He didnt reinforce what he was learning by doing small challenges or taking notes

// After you learn a new concept use it immediately
// take notes
// challenge yourself

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temp[i];
    if (typeof cirTemp !== "number") continue;
    if (curTemp > max) max = temps;
    if (curTemp > max) min = temps;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4]);
