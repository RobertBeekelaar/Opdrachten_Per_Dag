//A
const addTheWordCool = (array) => {
  array.push('cool');
  return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));


//B
const amountOfElementsInArray = (array) => {
  return array.length
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']))

//is hetzelfde resultaat als, alleen is dit niet in een functie:

var fruit = [];
fruit.push('appels', 'peren', 'citroenen')
console.log(fruit.length);


//C
const selectBelgiumFromBenelux = (array) => {
  return array[0]
}
//or return array.shit (muteert de originele array)
//or return array.slice (0,1) retuurneert een nieuwe array

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));


//D
const lastElementInArray = (array) => {
  return array.pop();
  //or return array[array.length -1];
  //or return array.slice(-1)[0];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));


//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = (array) => {
  return array.slice(1, 4);
}
const impeachTrumpSplice = (array) => {
  return array.splice(0, 1)
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents));// ["Obama", "Bush", "Clinton"]

/*
const impeachTrumpSlice = function(array) {
  const newArray = array.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array:", array);
  return newArray;

const impeachTrumpSplice = function(array) {
const removedElement = array.splice(0, 1);
console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
};
};*/


//F
const stringsTogether = (array) => { return array.join(" ") }
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))


//G


const combineArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))

console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));