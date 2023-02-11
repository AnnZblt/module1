'use strict';

{   
    //Задача 1
    
    const productName = prompt('Введите название товара:', '');
    const productAmount = + prompt('Введите количество этого товара:', '');
    const productCategory = prompt('Введите категорию этого товара:', '');
    const productPrice = + prompt('Введите цену этого товара:', '');
    const currency = '$';

    if (Number.isInteger(productAmount) && Number.isInteger(productPrice)) {
        let sum = (productAmount * productPrice) + currency;
        
    } else {
        console.log(`Вы ввели некорректные данные.`);
    }
}