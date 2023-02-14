'use strick';

const upperFirstChar = (phrase = 'henlo World') => {
    const expression = phrase.trim().toLowerCase();
    let newExpression = expression.charAt(0).toUpperCase() + expression.slice(1);
    return newExpression;
}
upperFirstChar();