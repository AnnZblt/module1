'use strict';

const rectangle = {
  unit: 'см',
  _width: 5,
  _height: 5,

  get width() {
    return `${this._width}${this.unit}`;
  },

  set width(value) {
    if (typeof value !== 'string') {
      this._width = value;
    }
  },

  get height() {
    return `${this._height}${this.unit}`;
  },

  set height(value) {
    if (typeof value !== 'string') {
      this._height = value;
    }
  },

  get perimeter() {
    return ((this._width + this._height) * 2) + this.unit;
  },

  get area() {
    return this._width * this._height + this.unit;
  },
};

// Проверки
console.log(`Ширина: `, rectangle.width);
console.log(`Высота: `, rectangle.height);

console.log(`Периметр: `, rectangle.perimeter);
console.log(`Площадь: `, rectangle.area);

rectangle.width = 20;
rectangle.height = 10;

console.log(`Новая ширина: `, rectangle.width);
console.log(`Новая высота: `, rectangle.height);

console.log(`Периметр: `, rectangle.perimeter);
console.log(`Площадь: `, rectangle.area);
