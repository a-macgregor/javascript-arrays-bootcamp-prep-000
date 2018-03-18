var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//1
function addElementToBeginningOfArray(array, element) {
 array = [`${element}`, ...array];
 return array;
}

//2 
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array;
}