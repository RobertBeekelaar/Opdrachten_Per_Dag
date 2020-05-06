
let colors = ['yellow', 'blue', 'red', 'orange'];

while (colors.length >= 1) {
  console.log(colors[0]);
  colors.shift();
}


for (colors = ['yellow', 'blue', 'red', 'orange']; colors.length >= 1; colors.shift()) {
  console.log(colors[0]);
}


let colors2 = ['yellow', 'blue', 'red', 'orange'];
colors2.forEach(element => console.log(element));


/*
1. De for-loop neemt 3 regels in beslag.
3. Je kunt makkelijker meerdere methodes achter elkaar laten gebeuren. En het is makkelijker te lezen.
4.
*/

let movie = {
  name: 'Oldboy',
  director: 'Chan-Wook Park',
  genre: 'Action',
  length: 120,
  date: 2003,
}

console.log(Object.getOwnPropertyNames(movie));

for (let property in movie) {
  console.log(`${property}`);
}