'use strict';

const randomNumberGenerator = (count = 1) => {
    const newArr = [];
    for (let i = 0; i < count; i++) {
        newArr.push(Math.ceil(Math.random() * 100));
    }
    return newArr;
}

//randomNumberGenerator();
console.log(`Генератор создал следующие числа: ${randomNumberGenerator(3)}`);