'use strict';

const getRandomLeapYear = (n, m) => {
    if (!Number.isInteger(n) || !Number.isInteger(m)) {
        return `Введите обязательные параметры`;
    }
    if (n > m) {
        [n, m] = [m, n];
    }
    const yearArr = [];
    for (let i = n; i <= m; i++) {
        let year = i;
        if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
            yearArr.push(year);
        }
    }

    return yearArr;
};

//getRandomLeapYear();
console.log(`Список високосных лет в заданном диапазоне: ${getRandomLeapYear(2000, 1960)}`);