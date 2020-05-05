const myAge = 18;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Robert';
const totalAmount = 120;


if (myAge >= 18 && isFemale) {

  console.log('Welcome at the Ladiesnight in Wasted!');

} else if (myAge >= 18) {

  console.log('Sorry this is a ladiesnight, see you another time!');

} else if (myAge < 18) {

  console.log('Sorry you are not old enough to enter Wasted.');
}


if (driverStatus == 'bob') {

  console.log('Well done bob, you can drive home safely!');

} else {

  console.log('Let someone else drive, or take a cab!');
}


if (myAge >= 18 && myAge <= 25) {

  console.log('You get 50% discount!');
}


if (name == 'Sarah' || name == 'Bram') {

  console.log('You will get a free beer because it is our 50 year anniversary!');
}

else {

  console.log('You will not get a free beer unfortunately.');
}


if (totalAmount >= 25 && totalAmount <= 50) {

  console.log('You will get a free portion of croquettes!');
}

else if (totalAmount >= 50 && totalAmount <= 100) {

  console.log('You will get a free portion of Nachos!');
}

else if (totalAmount >= 100) {

  console.log('You will get a free bottle of Champagne!');
}

else {
  console.log('If you spend more than 25 Euro you will get free snacks!')
}
