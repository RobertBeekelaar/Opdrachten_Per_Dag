//A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }];


const findSpiderman = (superheroesToFilter) => {
  return superheroesToFilter.find(function (superhero) {
    return superhero.name === 'Spiderman';
  });
}

console.log("Find spiderman:", findSpiderman(superheroes));



//B
const doubleArrayValues = [1, 2, 3]
const double = doubleArrayValues.map((item) => {
  return item * 2
})
console.log(double)


/*
doubleArrayValues.forEach((item) => {
  console.log(item * 2)
})
*/


const doubleArrayValues2 = (array) => {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 2);
  });
  return newArray;
};
console.log(doubleArrayValues2([1, 2, 3]));



const doubleArrayValuesArrow = (array) => {
  return array.map((number) => {
    return number + number;
  });
};
console.log(doubleArrayValuesArrow([1, 2, 3]));



//C
const containsNumberBiggerThan10 = (array) => {
  return array.some((number) => {
    return number > 10;
  });
};
console.log("I'm bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

//is same as:
const containsNumberBiggerThan11 = array => array.some(number => number > 11)
console.log("I'm bigger than 11:", containsNumberBiggerThan11([1, 4, 3, 6, 9, 7, 11]));


//D
const InTheGreat7 = (array) => {
  return array.includes('Italy')
}

console.log('There is italy:', InTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))



//E

const tenfold = (array) => {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))



//F

const isBelow100 = (array) => {
  return array.every(number => {
    return number < 100;
  })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

//G

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = (array) => {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};
console.log("Big sum, add all numbers in array:", bigSum(numbers));


const bigSum2 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const sum = bigSum2.reduce((total, amount) => total + amount);
console.log(sum);