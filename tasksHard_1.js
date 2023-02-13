const salary = + prompt('Укажите сумму вашего дохода:', '');

if (salary < 15000) {
    const tax = salary * 0.13;
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}

if (salary >= 15000 && salary < 50000) {
    const tax = salary * 0.2;
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}

if (salary >= 50000) {
    const tax = salary * 0.3;
    console.log(`Сумма вашего налогового вычета составляет ${tax}.`);
}


