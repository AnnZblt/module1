'use strict';

(() => {
  const figuresRus = ['камень', 'бумага', 'ножницы'];
  const figuresEng = ['rock', 'paper', 'scissors'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getFigure = (lang = 'RU') => {
    let figures = figuresRus;
    let getFiguresMsg = {
      mainQuestion: `Бот загадывает фигуру. Парируйте его атаку, выберите:
    - камень
    - ножницы
    - бумага`,
      escapeGame: `Уже уходите?`,
    };

    if (lang.toUpperCase === 'EN' || lang.toUpperCase === 'ENG') {
      figures = figuresEng;
      getFiguresMsg = {
        mainQuestion: `Bot guesses a shape. Parry his attack, choose:
      - rock
      - paper
      - scissors`,
        escapeGame: `Leaving already?`,
      };
    }

    const answer = prompt(getFiguresMsg.mainQuestion, '');
    let playerAnswer;
    let allFigures = [];

    if (answer === null) {
      alert(getFiguresMsg.escapeGame);
      return playerAnswer = null;
    }

    figures.map((item) => {
      for (let i = 1; i <= item.length; i++) {
        allFigures.push(item.slice(0, i));
        if (allFigures.includes(answer.toLowerCase().trim())) {
          allFigures = [];
          return playerAnswer = item;
        }
      }
    });

    switch (true) {
      case figures.includes(playerAnswer):
        return playerAnswer = figures.indexOf(playerAnswer, 0);

      default:
        return playerAnswer = -1;
    }
  };

  const game = (language = 'RU') => {
    const result = {
      player: 0,
      computer: 0,
    };

    let figures = figuresRus;
    let msg = {
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

    if (language.toUpperCase === 'EN' || language.toUpperCase === 'ENG') {
      figures = figuresEng;
      msg = {
        continue: `Do you want to continue the game?`,
        playerPoints: `Your points are: `,
        pcPoints: `Bot points are: `,
        playerWin: `You win, congratulations!`,
        pcWin: `Bot won.`,
        friendshipWin: `Friendship won :)`,
        playerFigure: `You chose`,
        pcFigure: `Bot chose`,
        playerPlusPoints: `+1 point to you`,
        pcPlusPoints: `+1 point for bot`,
        drawPlusPoints: `Draw`,
        figureEnter: `To continue the game you need to enter
  one of the 3 figures`,
        seeU: `Let's play another time :)`,
      };
    }

    return function start() {
      const playerChoise = getFigure(language);
      const pcChoise = getRandomIntInclusive(0, 2);

      const newGame = () => {
        const agree = confirm(msg.continue);
        if (agree) {
          return start();
        } else {
          alert(`${msg.playerPoints}${result.player}
${msg.pcPoints}${result.computer}`);
          if (result.player > result.computer) {
            return alert(msg.playerWin);
          } else if (result.player < result.computer) {
            return alert(msg.pcWin);
          } else {
            return alert(msg.friendshipWin);
          }
        }
      };

      if (playerChoise === null) {
        newGame();
        alert(msg.seeU);
      } else if (playerChoise === -1) {
        alert(msg.figureEnter);
        newGame();
      } else {
        switch ((playerChoise - pcChoise + 3) % 3) {
          case 1:
            alert(`${msg.playerFigure} ${figures[playerChoise]}
${msg.pcFigure} ${figures[pcChoise]}
${msg.playerPlusPoints}`);
            result.player += 1;
            return newGame();

          case 2:
            alert(`${msg.playerFigure} ${figures[playerChoise]}
${msg.pcFigure} ${figures[pcChoise]}
${msg.pcPlusPoints}`);
            result.computer += 1;
            return newGame();

          default:
            alert(`${msg.playerFigure} ${figures[playerChoise]}
${msg.pcFigure} ${figures[pcChoise]}
${msg.drawPlusPoints}`);
            return newGame();
        }
      }
      console.log(`Player `, figures[playerChoise],
        `; pc `, figures[pcChoise]);
    };
  };

  window.rps = game;
})();
