const getAveragePriceGoods = (arr) => {
    let averageSum = 0;
    const averagePriceArr = [];
    for (const i in arr) {
        const [count, sum] = arr[i];
        averageSum = Math.floor(sum / count);
        averagePriceArr.push(averageSum);
    }
    return averagePriceArr.join(', ');
};
getAveragePriceGoods(allСashbox);