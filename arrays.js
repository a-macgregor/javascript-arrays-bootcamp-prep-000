var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//Test 1
function addElementToBeginningOfArray(array, element) {
  [chocolateBars.unshift(`${element}`)];
}

//Test 2
function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = [`${element}`, ...array];
}

//Test 3 
