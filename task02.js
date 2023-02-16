'use strict';

const isPrime = (num) => {
    if (num < 2) {
        return false;
    };

    for(let i = 2; i <= num; i ++) {
        if (num % i === 0 && num !== i) {
            return false;
        } 
    };

    return true;
};

for (let n = 0, count = 0; n < 100; n++) {
    isPrime(n) && console.log(`${++count}. простое число ${n}`);
};