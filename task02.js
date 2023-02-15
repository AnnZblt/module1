'use strict';

const isPrime = (num) => {
    
    for(let i = 2; i < 10; i ++) {
        if (num % i === 0 && num !== i || num < 2) {
            return false;
        } 
    };

    return true;
};

for (let i = 0, count = 0; i < 100; i++) {
    isPrime(i) && console.log(`${++count}. простое число ${i}`);
};