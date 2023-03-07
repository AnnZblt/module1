'use strict';

(() => {
  const figuresRus = ['камень', 'бумага', 'ножницы'];
  // const figuresEng = ['rock', 'paper', 'scissors'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let pcAnswer;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === 0) {
      return pcAnswer = figuresRus[0];
    }
    if (randomNumber === 1) {
      return pcAnswer = figuresRus[1];
    }
    if (randomNumber === 2) {
      return pcAnswer = figuresRus[2];
    }
  };

  const getFigure = (lang) => {
    const answer = prompt(`Бот загадывает фигуру. Парируйте его атаку, выберите:
    - камень
    - ножницы
    - бумага`, '');

    const rock = ['к', 'ка', 'кам', 'каме', 'камен', 'камень'];
    const paper = ['б', 'бу', 'бум', 'бума', 'бумаг', 'бумага'];
    const scissors = ['н', 'но', 'нож', 'ножн', 'ножни', 'ножниц', 'ножницы'];

    let playerAnswer;
    switch (true) {
      case answer === null:
        alert(`Поиграем в следующий раз :)`);
        return answer;

      case rock.includes(answer.toLowerCase().trim()):
        return playerAnswer = figuresRus[0];

      case paper.includes(answer.toLowerCase().trim()):
        return playerAnswer = figuresRus[1];

      case scissors.includes(answer.toLowerCase().trim()):
        return playerAnswer = figuresRus[2];

      default:
        alert(`Для продолжения игры нужно ввести одну из 3-х фигур.`);
        return answer;
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const msg = [`Продолжить игру?`,
      `Вы набрали очков:  `,
      `Бот набрал очков: `,
      `Вы победили, поздравляем!`,
      `Победил бот.`,
      `Победила дружба :)`,
      `Вы выбрали `,
      `Бот выбрал `,
      `+1 очко в вашу копилку`,
      `+1 очко боту`,
      `Ничья`,
    ];

    return function start() {
      const playerChoise = getFigure();
      const pcChoise = getRandomIntInclusive(0, 2);

      const rock = figuresRus[0];
      const paper = figuresRus[1];
      const scissors = figuresRus[2];

      const newGame = () => {
        const agree = confirm(msg[0]);
        if (agree) {
          return start();
        } else {
          alert(`${msg[1]}${result.player}
${msg[2]}${result.computer}`);
          if (result.player > result.computer) {
            return alert(msg[3]);
          } else if (result.player < result.computer) {
            return alert(msg[4]);
          } else {
            return alert(msg[5]);
          }
        }
      };

      if (!figuresRus.includes(playerChoise) || playerChoise === null) {
        newGame();
      } else {
        if (playerChoise === rock && pcChoise === scissors ||
            playerChoise === paper && pcChoise === rock ||
            playerChoise === scissors && pcChoise === paper) {
          result.player += 1;
          alert(`${msg[6]} ${playerChoise} 
${msg[7]} ${pcChoise}
${msg[8]}`);
        } else if (pcChoise === rock && playerChoise === scissors ||
          pcChoise === paper && playerChoise === rock ||
          pcChoise === scissors && playerChoise === paper) {
          result.computer += 1;
          alert(`${msg[6]}${playerChoise} 
${msg[7]}${pcChoise}
${msg[9]}`);
        } else {
          alert(`${msg[6]} ${playerChoise} 
${msg[7]} ${pcChoise}
${msg[10]}`);
        }
        newGame();
      }

      console.log(`Player `, playerChoise, `; pc `, pcChoise);
    };
  };

  window.rps = game();
})();
