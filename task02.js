'use strict';

const getAverageValue = (arr) => {
    let averageSum = 0;
    for (let i = 0; i < arr.length; i++) {
        averageSum += arr[i];
    }
    return Math.floor(averageSum / arr.length);
}

getAverageValue();