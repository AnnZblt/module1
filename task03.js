'use strict';

const addPrefix = (names, prefix = 'Mr') => {
    const prefixNames = [];
    for (let i = 0; i < names.length; i++) {
        prefixNames[i] = `${prefix} ${names[i]}`;
    }
    return prefixNames;
}

//addPrefix();

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(`Результат ... : ${addPrefix(names)}`);