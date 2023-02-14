'use strick';

function reverse(str = '') {
    let phraseReverse = str;
    return phraseReverse.split('').reverse().join('');
}
reverse();