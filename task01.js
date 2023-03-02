'use strict';

const guessNumber = Math.ceil(Math.random() * 100);
let answer = '';
let count = 0;
const msg = [
  `Бот загадывает число от 1 до 100. 
Попробуйте отгадать, какое число задумал бот:`,
  `Попробуйте угадать еще раз:`,
];

const guessTheNumber = () => {
  if (answer !== null && +answer !== guessNumber) {
    answer = prompt(msg[+(count++ > 0)]);

    switch (true) {
      case answer === null:
        alert(`Игра закончена! Было загадано число ${guessNumber}`);
        break;

      case !Number.isInteger(+answer):
      case answer.trim() === '':
      case +answer < 1:
      case +answer > 100:
        alert('Для продолжения игры введите число от 1 до 100');
        break;

      case +answer < guessNumber:
        alert(`Загаданное число больше ${answer}`);
        break;

      case +answer > guessNumber:
        alert(`Загаданное число меньше ${answer}`);
        break;

      default:
        alert(`Правильно! Было загадано число ${answer}.
Потрачено попыток: ${count}.`);
        return answer;
    }
  }
  return guessTheNumber();
};

guessTheNumber();
