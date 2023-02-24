'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    add(productName, productPrice, productAmount = 1) {
        const product =  {
            productName,
            productPrice,
            productAmount,
        };
        this.items.push(product);
        this.calculateItemPrice();
        this.increaseCount(productAmount);
    },

    increaseCount(n) {
        this.count += n;
    },

    calculateItemPrice() {
        let productSum = 0;
        for (let i = 0; i < this.items.length; i++) {
            productSum = productSum + (this.items[i].productAmount * this.items[i].productPrice);
        }
        this.totalPrice = productSum;
    },

    getTotalPrice() {
        return this.totalPrice;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: `, this.totalPrice);
    },

    clear() {
        this.items = [];
        this.totalPrice =  0;
        this.count =  0;
    },

}



//Проверяем объекты в корзине
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);

//Добавляем товары
cart.add('PlayStation 5', 500, 2);
cart.add('Dualsense', 200, 4);
cart.add('Xbox S', 250, 1);

//Проверяем объекты в корзине после наполнения
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);

//Выводим содержимое корзины
cart.print();

//Чистим корзину
cart.clear();

//Проверяем ее наполнение после очистки
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);