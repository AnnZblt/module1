'use strict';

const getAverageValue = (arr) => {
    let averageSum = 0;
    for (let i = 0; i < arr.length; i++) {
        averageSum += arr[i];
    }
    return Math.floor(averageSum / arr.length);
}

//getAverageValue();

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
console.log(`Результат ... : ${getAverageValue(allСashbox)}`);