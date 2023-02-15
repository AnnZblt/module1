'use strict';

const isPrime = (num) => {
    if (!Number.isInteger(num) || num <= 0) {
        return console.log(`Введите целое положительное число`);
    }
    for(let i = 2; i < 10; i ++) {
        if (num % i === 0 && num !== i) {
            return console.log(false, `${num} составное число`);
        } 
    };
    return console.log(true, `${num} простое число`);
};

isPrime();

