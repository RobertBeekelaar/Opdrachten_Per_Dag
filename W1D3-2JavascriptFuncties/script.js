
//W1D3-2
//A
/*
const makeSandwich = (filling) => {
  Get a cornbread
  Put butter on it
  Put two slices of cheese
} 
*/

const makeCheeseSandwich = () => {
  console.log('Get a cornbread');
  console.log('Put butter on it');
  console.log('Put two slices of cheese inside');
}

makeCheeseSandwich();


//B
//function declaration
const makeSandwich = (topping) => {
  console.log('There you go, a sandwich with', topping)
}
//calling the function
makeSandwich('cheese');

makeSandwich('Ham');


//C
const calculateDiscountPrice = (totalAmount, discount) => {
  return totalAmount - discount;
}

console.log(Math.round(calculateDiscountPrice(100, 20)));

const calculateDiscountPrice2 = (totalAmount, discount) => {
  if (totalAmount >= 25) {
    return totalAmount - discount;
  }
  else {
    return totalAmount;
  }
}
console.log(Math.round(calculateDiscountPrice2(20, 20)));