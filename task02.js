'use strict';

const isPrime = (num) => {
    if (!Number.isInteger(num) || num <= 0) {
        return console.log(`Введите целое положительное число`);
    }
    for(let i = 2; i < 10; i ++) {
        if (num % i === 0 && num !== i) {
            return false;
        } 
    };
    return true;
};

for (let i = 0, count = 0; i < 100; i++) {
    isPrime(i) && console.log(`${++count}. простое число ${i}`);
};