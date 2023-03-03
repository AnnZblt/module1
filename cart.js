'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set discount(value) {
    const promocode = value.toString().toUpperCase().trim();
    if (promocode === 'METHED') {
      this._discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
  },

  add(productName, productPrice, productAmount = 1) {
    const product = {
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
    const productSum = this.items.reduce((acc, i) =>
      (acc + i.productAmount * i.productPrice) * ((100 - this.discount) / 100),
    0);
    return productSum;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: `, this.totalPrice);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },
};


// Проверяем объекты в корзине
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);

// Добавляем товары
cart.add('PlayStation 5', 500, 2);
cart.add('Dualsense', 200, 4);
cart.add('Xbox S', 250, 1);
// cart.discount = 'methed   ';
// cart.discount = 'NewYear';
// cart.discount = 123;
console.log(`Скидка по промокоду ${cart.discount}%`);

// Проверяем объекты в корзине после наполнения
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);

// Выводим содержимое корзины
cart.print();

// Чистим корзину
cart.clear();

// Проверяем ее наполнение после очистки
console.log(`В корзине: `, cart.items);
console.log(`Сумма товаров в корзине: `, cart.totalPrice);
console.log(`Количество товаров в корзине: `, cart.count);
