//Arrow functions

const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();


const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions();



const fivePlusSeven = function () {
  return 5 + 7
};

fivePlusSeven();


const fivePlusSeven = () => 5 + 7;

fivePlusSeven();



let sum = () => 1 + 2;

() => 1 + 2;  //function zonder naam, kun je dus ook niet callen


const myFunction = (a, b) => a + b;

//funtion met maar 1 parameter kunnen ook zonder parentaces
const addFive = a => a + 5;


//Bij een arrow function kunnen de curly braces weg tenzij bij een object zoals hieronder.
const createObject = () => ({ greetings: 'hoi' })

