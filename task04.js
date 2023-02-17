'use strict';

const getAveragePriceGoods = (arr) => {
    let averageSum = 0;
    let averagePrice = 0;
    const averagePriceArr = [];
    for (const i in arr) {
        const [count, sum] = arr[i];
        averageSum = sum / count;
        averagePriceArr.push(averageSum);
    }
    for (const j of averagePriceArr) {
    averagePrice += j;
    }
    averagePriceArr / averagePriceArr.length;
    return Math.floor(averagePrice);
};
//getAveragePriceGoods();

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];
console.log(`Результат ... : ${getAveragePriceGoods(allСashbox)}`);