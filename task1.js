'use strick';

const convertMoney = (euro) => {
    let sumInDollars = euro * 1.2;
    let sumInRubles = sumInDollars * 64;
    console.log(`Цена в рублях ${sumInRubles}.`);
};

convertMoney();