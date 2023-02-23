'use strict';

const randomNumberGenerator = (count = 1, n = 1, m = 100) => {

    if (count < 1 || !Number.isInteger(count) || !Number.isInteger(n) || !Number.isInteger(m)) {
        return `Введите обязательные параметры`;
    }

    if (n > m) {
        [n, m] = [m, n];
    }

    const newArr = [];
    n = Math.ceil(n);
    m = Math.floor(m);
    for (let i = 0; i < count; i++) {
        newArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
    }

    return newArr;
}

//randomNumberGenerator();
console.log(`Генератор создал следующие числа:`, randomNumberGenerator(5, 10, 100));