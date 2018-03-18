var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var chocolateBars = [array.unshift(`${element}`)];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = [`${element}`, ...array];
}