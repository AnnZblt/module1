const salary = + prompt('Укажите сумму вашего дохода:', '');
const min = 15000;
const max = 50000;

if (salary < min) {
    const tax = Math.round(salary * 0.13);
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}

if (salary >= min && salary < max) {
    const tax = Math.round(((salary - min) * 0.2) + (min * 0.13));
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}

if (salary >= max) {
    const tax = Math.round(((salary - max) * 0.3) + ((max - min) * 0.2) + (min * 0.13));
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}
