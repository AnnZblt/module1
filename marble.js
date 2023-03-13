'use strict';

(() => {
  const ballsCount = {
    player: 5,
    pc: 5,
  };
  const figures = ['камень', 'бумага', 'ножницы'];

  const getPcMove = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getPcBet = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getPlayerMove = () => {
    const playerAgree = confirm(`Загаданное ботом число четное?
"ОК" - да, "ОТМЕНА" - нет.`);
    let playerAnswer;
    if (playerAgree) {
      return playerAnswer = 0;
    } else {
      return playerAnswer = 1;
    }
  };

  const getPlayerBet = () => {
    const playerAnswer = +prompt(`Введите вашу ставку.
На вашем счету шариков: ${ballsCount.player}`, '');

    switch (true) {
      case playerAnswer > ballsCount.player:
        alert(`Вы не можете поставить больше шариков, чем у вас есть.`);
        return getPlayerBet();

      case playerAnswer === null:
        alert(`Вы не можете выйти из игры, пока не выиграете 
или не проиграете.`);
        return getPlayerBet();

      case playerAnswer === 0 || playerAnswer < 0 ||
      !Number.isInteger(playerAnswer):
        alert(`Ваша ставка должна быть больше 0.`);
        return getPlayerBet();

      default:
        return playerAnswer;
    }
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getFigure = () => {
    const getFiguresMsg = {
      beginGame: `Чтобы начать игру, нужно провести жеребьевку.
Давайте решим, кто будет ходить первый?`,
      mainQuestion: `Бот загадывает фигуру. Парируйте его атаку, выберите:
    - камень
    - ножницы
    - бумага`,
      escapeGame: `Уже уходите?`,
    };
    alert(getFiguresMsg.beginGame);
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

  const game = () => {
    const msg = {
      rpsPlayerWin: `Вы победили, поздравляем! Вы начинаете игру.`,
      rpsPcWin: `Победил бот. Бот начинает игру.`,
      draw: `Ничья. Играем снова.`,
      playerRps: `Вы выбрали`,
      pcRps: `Бот выбрал`,
      figureEnter: `Для продолжения игры нужно ввести одну из 3-х фигур`,
      seeU: `Поиграем в следующий раз :)`,
      pcChoiseWin: `Бот угадал вашу ставку. Вы проиграли шариков:`,
      playerChoiseWin: `Вы угадали ставку бота! Вы выиграли шариков:`,
      pcBetWin: `Ваша ставка не сыграла. Вы проиграли шариков:`,
      playerBetWin: `Ваша ставка сыграла! Вы выиграли шариков:`,
      pcLose: `У бота не осталось шариков, вы выиграли!`,
      playerLose: `У вас не осталось шариков, вы проиграли.`,
      playerBalance: `У вас осталось шариков`,
    };

    const playerMove = () => {
      const pcChoise = getPcMove(0, 1);
      const playerBet = getPlayerBet();

      if (playerBet % 2 === pcChoise) {
        ballsCount.pc += playerBet;
        ballsCount.player -= playerBet;
        if (ballsCount.player < 0 || ballsCount.player > 10) {
          alert(`${msg.pcChoiseWin} ${playerBet + ballsCount.player}`);
        } else {
          alert(`${msg.pcChoiseWin} ${playerBet}`);
          alert(`${msg.playerBalance} ${ballsCount.player}`);
        }
      } else {
        ballsCount.pc -= playerBet;
        ballsCount.player += playerBet;
        if (ballsCount.pс < 0 || ballsCount.player > 10) {
          alert(`${msg.playerBetWin} ${playerBet + ballsCount.pc}`);
        } else {
          alert(`${msg.playerBetWin} ${playerBet}`);
          alert(`${msg.playerBalance} ${ballsCount.player}`);
        }
      }
    };

    const pcMove = () => {
      const playerChoise = getPlayerMove();
      const pcBet = getPcBet(1, ballsCount.pc);

      if (pcBet % 2 === playerChoise) {
        ballsCount.player += pcBet;
        ballsCount.pc -= pcBet;
        if (ballsCount.pс < 0 || ballsCount.player > 10) {
          alert(`${msg.playerChoiseWin} (${pcBet + ballsCount.pc})`);
        }
        alert(`${msg.playerChoiseWin} ${pcBet}`);
        alert(`${msg.playerBalance} ${ballsCount.player}`);
      } else {
        ballsCount.player -= pcBet;
        ballsCount.pc += pcBet;
        if (ballsCount.player < 0 || ballsCount.player > 10) {
          alert(`${msg.pcBetWin} ${pcBet + ballsCount.player}`);
        } else {
          alert(`${msg.pcBetWin} ${pcBet}`);
          alert(`${msg.playerBalance} ${ballsCount.player}`);
        }
      }
    };

    const rps = () => {
      const playerFigure = getFigure();
      const pcFigure = getRandomIntInclusive(0, 2);

      if (playerFigure === null) {
        return 0;
      } else if (playerFigure === -1) {
        alert(msg.figureEnter);
        rps();
      } else {
        switch ((playerFigure - pcFigure + 3) % 3) {
          case 1:
            alert(`${msg.playerRps} ${figures[playerFigure]}
${msg.pcRps} ${figures[pcFigure]}
${msg.rpsPlayerWin}`);
            return 1;

          case 2:
            alert(`${msg.playerRps} ${figures[playerFigure]}
${msg.pcRps} ${figures[pcFigure]}
${msg.rpsPcWin}`);
            return 2;

          default:
            alert(`${msg.playerRps} ${figures[playerFigure]}
${msg.pcRps} ${figures[pcFigure]}
${msg.draw}`);
            return rps();
        }
      }
    };

    let fate = rps();

    return function start() {
      switch (true) {
        case fate === 0:
          return alert(msg.seeU);
        case fate === 1:
          playerMove();
          switch (true) {
            case ballsCount.player <= 0:
              return alert(msg.playerLose);

            case ballsCount.pc <= 0:
              ballsCount.pc = 0;
              ballsCount.player = 10;
              return alert(msg.pcLose);

            default:
              pcMove();
              switch (true) {
                case ballsCount.player <= 0:
                  ballsCount.player = 0;
                  ballsCount.pc = 10;
                  return alert(msg.playerLose);

                case ballsCount.pc <= 0:
                  ballsCount.pc = 0;
                  ballsCount.player = 10;
                  return alert(msg.pcLose);

                default:
                  return start();
              }
          }

        default:
          pcMove();
          switch (true) {
            case ballsCount.player <= 0:
              ballsCount.player = 0;
              ballsCount.pc = 10;
              return alert(msg.playerLose);

            case ballsCount.pc <= 0:
              ballsCount.pc = 0;
              ballsCount.player = 10;
              return alert(msg.pcLose);

            default:
              playerMove();
              switch (true) {
                case ballsCount.player <= 0:
                  ballsCount.player = 0;
                  ballsCount.pc = 10;
                  return alert(msg.playerLose);

                case ballsCount.pc <= 0:
                  ballsCount.pc = 0;
                  ballsCount.player = 10;
                  return alert(msg.pcLose);

                default:
                  return start();
              }
          }
      }
    };
  };
  window.marble = game();
})();
