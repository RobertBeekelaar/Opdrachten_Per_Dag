//object:
let person = {
  name: 'Robert',
  age: 31
};

//objecten
//console.log(person);
console.log(person.name);
console.log(person.age);

person['name'] = 'Bob';
console.log(person.name);

let evalutations = [7, 10, 9]
console.log(evalutations);
console.log(typeof evalutations);


//arrays
let colors = ['red', 'yellow', 'green']
colors.push('black');
colors.push(8);

let object = {
  greeting: 'Hi I am an object'
};
colors.push(object);


console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log('kleur:', colors.slice(-1)[0]);



/*
// Dot notation
person.name = 'John';
console.log(person.name);

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';

//array (is also an object):
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

console.log(selectedColors[1]);
console.log(typeof selectedColors);
*/