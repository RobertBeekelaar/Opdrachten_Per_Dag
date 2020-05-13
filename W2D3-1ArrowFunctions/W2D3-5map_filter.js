const superHeroes = [
  {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
  },
  {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
  },
  {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
  },
  {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
  },
  {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
  },
  {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
  },
  {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
  },
  {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
  },
  {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
  },
  {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
  },
  {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
  },
  {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
  },
  {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
  },
  {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
  },
  {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
  }
]

//1
const itemNames = superHeroes.map((item) => {
  return item.name
})
console.log(itemNames);


//2
const filteredHeroes = superHeroes.filter((item) => {
  return item.weight < 190;
})

console.log(filteredHeroes);


//3
const filteredHeroes200 = superHeroes.filter((item) => {
  return item.weight == 200;
}).map((item) => {
  return item.name
})

console.log(filteredHeroes200);

/*
const filteredHeroes20 = superHeroes.map((item) => {

  return item.name
})
console.log(filteredHeroes20 );

*/


//4
const itemAppearances = superHeroes.map((item) => {
  return item.first_appearance
})
console.log(itemAppearances);


//4
const heroesDC = superHeroes.filter((item) => {
  return item.publisher == "DC Comics";
}).map((item) => {
  return item.name
})

console.log(heroesDC);


//5
const heroesMarvel = superHeroes.filter((item) => {
  return item.publisher == "Marvel Comics";
}).map((item) => {
  return item.name
})

console.log(heroesMarvel);


//6

const weightHeroesDC2 = superHeroes.filter((item) => {
  return item.publisher == "DC Comics"
}).reduce((amount, item) => { return Number(item.weight) + amount }, 0);

console.log(weightHeroesDC2);

//7
const weightHeroesMarvel = superHeroes.filter((item) => {
  return item.publisher == "Marvel Comics" && item.weight !== "unknown"
}).reduce((amount, item) => { return Number(item.weight) + amount }, 0);

console.log(weightHeroesMarvel);