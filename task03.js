'use strict';

const randomNumberGenerator = (count = 1, n = 1, m = 100, type) => {

    if (count < 1 || !Number.isInteger(count) || !Number.isInteger(n) || !Number.isInteger(m)) {
    return `Введите обязательные параметры`;
    }

    const newArr = [];
    n = Math.ceil(n);
    m = Math.floor(m);

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;
    
        if (type === 'even' && randomNumber % 2 !== 0) {
            randomNumber ++;
        } else if (type === 'odd' && randomNumber % 2 === 0) {
            randomNumber ++;
        }
        newArr.push(randomNumber);
    }

    return newArr;

};

//randomNumberGenerator();
console.log(`Генератор создал следующие числa: ${randomNumberGenerator(3, 0, 100, 'even')}`) ;