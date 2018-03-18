var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//1
function addElementToBeginningOfArray(array, element) {
 array = [`${element}`, ...array];
}

addElementToBeginningOfArray();