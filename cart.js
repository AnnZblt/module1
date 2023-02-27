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
        return productSum;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: `, this.totalPrice);
    },

    clear() {
        this.items = [];
        this.count =  0;
    },

}

Object.defineProperty( cart, 'totalPrice', {
    get() {
        return this.calculateItemPrice();
    }
});
