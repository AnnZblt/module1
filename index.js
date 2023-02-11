'use strict';

{
    const productName = prompt('Введите название товара:', '');
    const productAmount = + prompt('Введите количество этого товара:', '');
    const productCategory = prompt('Введите категорию этого товара:', '');
    const productPrice = + prompt('Введите цену этого товара:', '');
    const currency = '$'

    console.log(`Название товара: `, productName, typeof productName);
    console.log(`Категория товара: `, productCategory, typeof productCategory);
    console.log(`Количество товара на складе: `, productAmount, typeof productAmount);
    console.log(`Цена товара(в ${currency}): `, productPrice, typeof productPrice);

    console.log(`На складе ${productAmountNumber} ед. товара "${productName}" на сумму `, productAmountNumber * productPriceNumber, currency);
}
