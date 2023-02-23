'use strict';

const guessNumber = Math.ceil(Math.random() * 100);
let answer = prompt('Бот загадывает число от 1 до 100. Попробуйте отгадать, какое число задумал бот:', '');

if (answer != null) {
    while(answer !== guessNumber) {
        switch (true) {
            case !Number.isInteger(+answer) || answer.trim() === '':
                alert('Для продолжения игры введите число.');
                answer = prompt('Попробуйте угадать еще раз:', '');
                break;
            case +answer < guessNumber:
                alert(`Загаданное число больше ${answer}`);
                answer = prompt('Попробуйте угадать еще раз:', '');
                break;
            case +answer > guessNumber:
                alert(`Загаданное число меньше ${answer}`);
                answer = prompt('Попробуйте угадать еще раз:', '');
                break;
            default:
                alert('Правильно!');
                break;
        }
        if (+answer === guessNumber) {
            alert(`Правильно! Было загадано число ${answer}`);
            break;
        } else if (answer == null) {
            alert(`Игра закончена! Было загадано число ${guessNumber}`);
            break;
        }
    }
} else {
    alert(`Игра закончена! Было загадано число ${guessNumber}`);
};
