'use strict';

{
    const productName = 'PlayStation 5';
    const productAmount = 4;
    const productCategory = 'Game console';
    const productPrice = 500;
    const currency = '$'

    let productSum = productAmount * productPrice;

    console.log('Product name: ', productName);
    console.log('Products sum: ', productSum + currency);
}

{
    const productName = 'DualSense';
    const productAmount = 8;
    const productCategory = 'Game console devices';
    const productPrice = 200;
    const currency = '$'
}

{
    const productName = prompt('Введите название товара:', '');
    const productAmount = prompt('Введите количество этого товара:', '');
    const productCategory = prompt('Введите категорию этого товара:', '');
    const productPrice = prompt('Введите цену этого товара:', '');
    const currency = '$'
    const errorMessage = `С подсчетами что-то не так. Проверяем информацию.`;

    console.log(`Название товара: `, productName, typeof productName);
    console.log(`Категория товара: `, productCategory, typeof productCategory);
    console.log(`Количество товара на складе: `, productAmount, typeof productAmount);
    console.log(`Цена товара(в ${currency}): `, productPrice, typeof productPrice);

    if (Number.isInteger(productAmount) !== true) {
        const productAmountNumber = productAmount * 1;
        console.log(`Количество товара на складе: `, productAmountNumber, typeof productAmountNumber);
        if (Number.isInteger(productPrice) !== true) {
            const productPriceNumber = productPrice * 1;
            console.log(`Цена товара(в ${currency}): `, productPriceNumber, typeof productPriceNumber);
            if (Number.isInteger(productAmountNumber) === true && Number.isInteger(productPriceNumber) === true) {
                console.log(`На складе ${productAmountNumber} ед. товара "${productName}" на сумму `, productAmountNumber * productPriceNumber, currency);
            } else {
                console.log(errorMessage);
            }
            
        } else {
            console.log(errorMessage);
        }
    } else {
        console.log(errorMessage);
    };
}