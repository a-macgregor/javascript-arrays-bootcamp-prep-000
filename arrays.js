var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  chocolateBars = [array.unshift(`${element}`)];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = [`${element}`, ...array];
}