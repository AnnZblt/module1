'use strict';

const numbersSum = (arr) => {
  const itemsSum = arr.reduce((acc, item) => acc + item, 0);
  if (itemsSum >= 50) {
    return arr;
  }
  const randomNumber = Math.round(Math.random() * 10);
  arr.push(randomNumber);

  return numbersSum(arr);
};

console.log(`Результат работы функции массив:`, numbersSum([]));
