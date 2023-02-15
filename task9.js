const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const count = {};
fruitBasket.forEach((i) => {
  if (count[i]) {
    count[i]++;
  } else {
    count[i] = 1;
  }
});

console.log(count); 