"use strict";

/**
 * Sums values in the array by function "reduce"
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
let sumReduce = array => {
  return array.reduce(function(curr, prev) {
    return curr + prev;
  });
}

console.log(sumReduce([1, 2, 3, 4])); // 10
