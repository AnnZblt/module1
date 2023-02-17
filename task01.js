'use strict';

const filter = (all, failed) => {
    const passedStudents = [];
    for (const i in all) {
        if (!failed.includes(all[i])) {
            passedStudents.push(all[i]);
        }
    }
    return passedStudents;
};

//filter();

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Таков', 'Сяков', 'Козлов', 'Коров', 'Котиков'];
const failedStudents = ['Сидоров', 'Сяков', 'Котиков'];

console.log(`Результат ... : ${filter(allStudents, failedStudents)}`);