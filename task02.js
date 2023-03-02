'use strict';

const randomNumbersArr = [];
let itemsSum = 0;

const numbersSum = (arr) => {
  const randomNumber = Math.round(Math.random() * 10);
  randomNumbersArr.push(randomNumber);
  itemsSum = randomNumbersArr.reduce((acc, item) => acc + item, 0);
  if (itemsSum >= 50) {
    return arr;
  }
  return numbersSum(arr);
};

console.log(`Результат работы функции массив:`, numbersSum(randomNumbersArr));
console.log(`Сумма чисел в массиве`, itemsSum);
