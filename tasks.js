'use strict';

{
    // Задача 2

    const rain = Math.round(Math.random() * 10);

    console.log(rain === 0 ? `Дождя нет!` : `Пошёл дождь. Возьмите зонт!`)
}

{
    // Задача 3

    const mathematicPoints = + prompt('Пожалуйста, введите полученное количество баллов на экзамене по МАТЕМАТИКЕ:', '');
    const russianLanguagePoints = + prompt('Пожалуйста, введите полученное количество баллов на экзамене по РУССКОМУ ЯЗЫКУ:', '');
    const informaticPoints = + prompt('Пожалуйста, введите полученное количество баллов на экзамене по ИНФОРМАТИКЕ:', '');
    const pointsSum = mathematicPoints + russianLanguagePoints + informaticPoints;

    if (pointsSum >= 265 ) {
        console.log(`Поздравляем! Вы поступили на бюджет!`);
    }
}

{
    // Задача 4 

    const moneySum = + prompt ('Введите желаемую сумму для снятия:', '');

    console.log(moneySum % 100 === 0 && moneySum >= 100 ? `Пожалуйста, подождите. Происходитоперация снятия.` : `Пожалуйста, введите сумму больше и кратную 100.` );
}