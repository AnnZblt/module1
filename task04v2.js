'use strict';
const getAveragePriceGoods = (arr) => {
    let averagePrice = 0;
    let averageGoods = 0;
    const averagePriceArr = [];
    const averageGoodsArr = [];

    for (const i in arr) {
        const [count, sum] = arr[i];
        averagePriceArr.push(sum);
        averageGoodsArr.push(count);  
    }

    for (const j of averagePriceArr) {
    averagePrice += j;
    }
    
    for (const k of averageGoodsArr) {
    averageGoods += k;
    }

    let averagePriceGoods = Math.floor(averagePrice / averageGoods);
    return averagePriceGoods;
}

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