var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//Test 1
function addElementToBeginningOfArray(array, element) {
 array = [`${element}`, ...array];
}

//Test 2
function destructivelyAddElementToBeginningOfArray(array, element) {
  [array.unshift(`${element}`)];
}

//Test 3 
function addElementToEndOfArray(array, element) {
  [array.push(`${element}`)];
}

//Test 4 
function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, `${element}`];
}