'use strict';

(() => {
  const figuresRus = ['камень', 'бумага', 'ножницы'];
  // const figuresEng = ['rock', 'paper', 'scissors'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getFigure = (lang) => {
    const answer = prompt(`Бот загадывает фигуру. Парируйте его атаку, выберите:
    - камень
    - ножницы
    - бумага`, '');
    let playerAnswer;
    let allFigures = [];

    if (answer === null) {
      alert(`Уже уходите?`);
      return playerAnswer = null;
    }

    figuresRus.map((item) => {
      for (let i = 1; i <= item.length; i++) {
        allFigures.push(item.slice(0, i));
        if (allFigures.includes(answer.toLowerCase().trim())) {
          allFigures = [];
          return playerAnswer = item;
        }
      }
    });

    switch (true) {
      case figuresRus.includes(playerAnswer):
        return playerAnswer = figuresRus.indexOf(playerAnswer, 0);

      default:
        return playerAnswer = -1;
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const msgRus = {
      continue: `Продолжить игру?`,
      playerPoints: `Вы набрали очков:`,
      pcPoints: `Бот набрал очков:`,
      playerWin: `Вы победили, поздравляем!`,
      pcWin: `Победил бот.`,
      friendshipWin: `Победила дружба :)`,
      playerFigure: `Вы выбрали`,
      pcFigure: `Бот выбрал`,
      playerPlusPoints: `+1 очко в вашу копилку`,
      pcPlusPoints: `+1 очко боту`,
      drawPlusPoints: `Ничья`,
      figureEnter: `Для продолжения игры нужно ввести одну из 3-х фигур`,
      seeU: `Поиграем в следующий раз :)`,
    };

    const msgEng = {
      continue: `Do you want to continue the game?`,
      playerPoints: `Your points are: `,
      pcPoints: `Bot points are: `,
      playerWin: `You win, congratulations!`,
      pcWin: `Bot won.`,
      friendshipWin: `Friendship won :)`,
      playerFigure: `You chose `,
      pcFigure: `Bot chose `,
      playerPlusPoints: `+1 point to you`,
      pcPlusPionts: `+1 point for bot`,
      drawPlusPoints: `Draw`,
      figureEnter: `To continue the game you need to enter
one of the 3 figures`,
      seeU: `Let's play another time :)`,
    };

    return function start() {
      const playerChoise = getFigure();
      const pcChoise = getRandomIntInclusive(0, 2);

      const newGame = () => {
        const agree = confirm(msgRus.continue);
        if (agree) {
          return start();
        } else {
          alert(`${msgRus.playerPoints}${result.player}
${msgRus.pcPoints}${result.computer}`);
          if (result.player > result.computer) {
            return alert(msgRus.playerWin);
          } else if (result.player < result.computer) {
            return alert(msgRus.pcWin);
          } else {
            return alert(msgRus.friendshipWin);
          }
        }
      };

      if (playerChoise === null) {
        alert(msgRus.seeU);
      } else if (playerChoise === -1) {
        alert(msgRus.figureEnter);
        newGame();
      } else {
        switch ((playerChoise - pcChoise + 3) % 3) {
          case 1:
            alert(`${msgRus.playerFigure} ${figuresRus[playerChoise]}
${msgRus.pcFigure} ${figuresRus[pcChoise]}
${msgRus.playerPlusPoints}`);
            result.player += 1;
            return newGame();

          case 2:
            alert(`${msgRus.playerFigure} ${figuresRus[playerChoise]}
${msgRus.pcFigure} ${figuresRus[pcChoise]}
${msgRus.pcPlusPoints}`);
            result.computer += 1;
            return newGame();

          default:
            alert(`${msgRus.playerFigure} ${figuresRus[playerChoise]}
${msgRus.pcFigure} ${figuresRus[pcChoise]}
${msgRus.drawPlusPoints}`);
            return newGame();
        }
      }

      console.log(`Player `, figuresRus[playerChoise],
        `; pc `, figuresRus[pcChoise]);
    };
  };

  window.rps = game();
})();
