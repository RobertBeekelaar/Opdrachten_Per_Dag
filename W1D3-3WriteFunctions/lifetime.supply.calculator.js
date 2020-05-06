
//zo had ik hem. Totaal per dag gedurende het totaal aantal levensjaren
const calcSupply = (age, dailyAmount) =>
{
  var dailyAmount = age * dailyAmount * 365.25;
  console.log(`You will need ${dailyAmount} to last you the rest age of ${age}`)
}

calcSupply(50,5);
calcSupply(60,4);
calcSupply(70,2);


//zo kan het ook/ is beter. Totaal per dag voor de rest van je levensjaren (100-leeftijd)

const calculateSupply = (age, numPerDay) =>
{
  let maxAge = 100;
  let totalNeeded = (numPerDay * 365.25) * (maxAge - age);
  let message = `You will need ${totalNeeded} cups of tea to last you until the ripe old age of ${maxAge}`;
  console.log(message);
}

calculateSupply(50, 5);
calculateSupply(60, 4);
calculateSupply(70, 2)
