'use strict';

const rectangle = {
  unit: 'см',
  width: `5 см`,
  height: `5 см`,
  perimeter: 0,
  area: 0,

  get newWidth() {
    return `${this.width} ${this.unit}`;
  },
  set newWidth(value) {
    if (typeof value !== 'string') {
      this.width = value;
    }
  },

  get newHeight() {
    return `${this.height} ${this.unit}`;
  },
  set newHeight(value) {
    if (typeof value !== 'string') {
      this.height = value;
    }
  },

  getPerimeter(w = this.width, h = this.height) {
    return this.perimeter = (w * 2) + (h * 2);
  },

  getArea() {
    return this.area = this.width * this.height;
  },
};

// Проверки
console.log(`Ширина: `, rectangle.width);
console.log(`Высота: `, rectangle.height);

rectangle.newWidth = 20;
rectangle.newHeight = 10;

console.log(rectangle.width);
console.log(rectangle.height);

console.log(`Новая ширина: `, rectangle.newWidth);
console.log(`Новая высота: `, rectangle.newHeight);

rectangle.getArea();
rectangle.getPerimeter();

console.log(`Периметр: `, rectangle.perimeter, rectangle.unit);
console.log(`Площадь: `, rectangle.area, rectangle.unit);
