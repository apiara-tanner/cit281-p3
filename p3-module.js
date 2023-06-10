/* validDenomination(coin):
    Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100
    Must use the array indexOf() method
    This function can be coded to be a single line of code, although not required. If you do attempt to code into a single line of code, you are recommended to first find a solution that you understand completely, then comment out your solution when you reduce your code to a single line of code.

valueFromCoinObject(obj):

    Returns the calculated value of a single coin object from the obj function parameter
    Must use object deconstruction to create constant variables denom and count from the obj function parameter, using default object values of 0 for denom and count

valueFromArray(arr):

    Iterates through an array of coin objects and returns the final calculated value of all coin objects
    Must use Array.reduce() method, and an arrow function with the Array.reduce() method
    Must call valueFromCoinObject()
    Extra credit: Handle scenario where the arr function parameter, rather than an array of coin objects, contains another array of coin objects

coinCount(...coinage):

    This function is the only exported function from the code module
    Calls and returns the result of valueFromArray() function, which will be the value of all coin objects with the coinage array function parameter
*/


function validDenomination(coin){
  return[1, 5, 10, 25, 50, 100].indexOf(coin.denom) !== -1;
}

function valueFromCoinObject(obj){
  const{denom = 0, count = 0} = obj;
  return validDenomination(obj)?denom*count:0;
}


function valueFromArray(arr){
  let arrayLength = arr.length;
  let totalArray = [];
  for(let i = 0; i < (arrayLength); i++){
    let current = arr[i];
    totalArray.push(valueFromCoinObject(current));
  }
  const sum = totalArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

function coinCount(...coinage){
  return valueFromArray(coinage);
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));

module.exports = {
  coinCount
};
