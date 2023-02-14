'use strick';

const calculate =  (sum = 1, amount = 1, promokod = '') => {
    if (sum <= 0 || amount <= 0) {
        return console.log(`Сумма корзины или количество товаров не могут быть меньше 0, введите корректное число.`);
    }

    let productsSum = sum;
    const productsAmount = amount;
    const productPromokod = promokod.trim().toUpperCase();

    if (productsAmount >= 10) {
        productsSum *= 0.97;
        console.log(productsSum, `если товаров больше 10`);
    }

    if (productsSum > 30000) {
        productsSum = productsSum - ((productsSum - 30000) * 0.15);
        console.log(productsSum, `если сумма товаров больше 30000`);
    }

    if (productPromokod === 'METHED') {
        productsSum *= 0.9;
        console.log(productsSum, `если первый промокод`);
    }

    if (productPromokod === 'G3H2Z1' && productsSum >= 2000) {
        console.log(productsSum, `если сумма в корзине больше 2000`);
    }

    return productsSum;
};

calculate();