'use strict';

(() => {
  const ballsCount = {
    player: 5,
    pc: 5,
  };
  const figures = ['камень', 'бумага', 'ножницы'];

  const msg = {
    isOdd: `Загаданное ботом число нечетное?
"ОК" - да, "ОТМЕНА" - нет.`,
    enterPlayerBet: `Введите вашу ставку.
На вашем счету шариков: `,
    tooHighBet: `Вы не можете поставить больше шариков, чем у вас есть.`,
    incorrectBet: `Ваша ставка должна быть больше 0.`,
    beginDraw: `Чтобы начать игру, нужно провести жеребьевку.
Давайте решим, кто будет ходить первый?`,
    drawQuestion: `Бот загадывает фигуру. Парируйте его атаку, выберите:
  - камень
  - ножницы
  - бумага`,
    escapeGame: `Уже уходите?`,
    player: `Игрок`,
    pc: `Бот`,
    rpsPlayerWin: `Вы победили, поздравляем! Вы начинаете игру.`,
    rpsPcWin: `Победил бот. Бот начинает игру.`,
    draw: `Ничья. Играем снова.`,
    playerRps: `Вы выбрали`,
    pcRps: `Бот выбрал`,
    figureEnter: `Для продолжения игры нужно ввести одну из 3-х фигур`,
    seeU: `Поиграем в следующий раз :)`,
    betWin: `Ставка сыграла.`,
    betLose: `Ставка не сыграла.`,
    ballsWin: `выиграл шариков:`,
    ballsLose: `проиграл шариков:`,
    pcLose: `У бота не осталось шариков, вы выиграли!`,
    playerLose: `У вас не осталось шариков, вы проиграли.`,
    playerBalance: `У вас осталось шариков`,
    newGame: `Хотите сыграть еще раз?`,
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pcAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcAnswer;
  };

  const getPlayerMove = () => {
    const playerAgree = +confirm(msg.isOdd);
    return playerAgree;
  };

  const getPlayerBet = () => {
    const playerAnswer = prompt(`${msg.enterPlayerBet} 
${ballsCount.player}`, '');

    switch (true) {
      case playerAnswer === null:
        alert(msg.escapeGame);
        return playerAnswer;

      case playerAnswer > ballsCount.player:
        alert(msg.tooHighBet);
        break;

      case playerAnswer === 0 || playerAnswer < 0 ||
        !Number.isInteger(+playerAnswer):
        alert(msg.incorrectBet);
        break;

      default:
        return +playerAnswer;
    }
    return getPlayerBet();
  };

  const move = (balanceOne, balanceTwo, bet, choise, who) => {
    if (bet === null) {
      alert(msg.seeU);
      return {balanceOne, balanceTwo};
    }

    switch (bet % 2 === choise) {
      case false && balanceOne >= 10:
        balanceOne += bet;
        balanceTwo -= bet;
        alert(`${msg.betWin} ${who} ${msg.ballsWin} ${bet + balanceTwo}`);
        balanceOne = 10;
        balanceTwo = 0;
        return {balanceOne, balanceTwo};

      case false:
        balanceOne += bet;
        balanceTwo -= bet;
        alert(`${msg.betWin} ${who} ${msg.ballsWin} ${bet}`);
        break;

      default:
        balanceOne -= bet;
        balanceTwo += bet;
        alert(`${msg.betLose} ${who} ${msg.ballsLose} ${bet}`);
        break;
    }
    return {balanceOne, balanceTwo};
  };

  const getFigure = (figures) => {
    let answer = prompt(msg.drawQuestion, '');

    if (answer === null) {
      alert(msg.escapeGame);
      return answer;
    }

    answer = answer.trim().toLowerCase();

    return figures.map(item => item.slice(0, answer.length)).indexOf(answer);
  };

  const rps = () => {
    const playerFigure = getFigure(['камень', 'бумага', 'ножницы']);
    const pcFigure = getRandomNumber(0, 2);

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

  const game = () => {
    alert(msg.beginDraw);
    let fate = rps();
    const start = (fate) => {
      if (fate === 0) {
        return alert(msg.seeU);
      } else if (fate === 1) {
        const playerMove = move(ballsCount.player, ballsCount.pc,
          getPlayerBet(), getRandomNumber(0, 1), msg.player);
        ballsCount.player = playerMove.balanceOne;
        ballsCount.pc = playerMove.balanceTwo;
        alert(`${msg.playerBalance} ${ballsCount.player}`);

        switch (true) {
          case ballsCount.player <= 0:
            alert(msg.playerLose);
            break;

          case ballsCount.pc <= 0:
            alert(msg.pcLose);
            break;

          default:
            fate = 2;
            return start(fate);
        }
      } else {
        const pcMove = move(ballsCount.pc, ballsCount.player,
          getRandomNumber(1, ballsCount.pc), getPlayerMove(), msg.pc);
        ballsCount.pc = pcMove.balanceOne;
        ballsCount.player = pcMove.balanceTwo;
        alert(`${msg.playerBalance} ${ballsCount.player}`);

        switch (true) {
          case ballsCount.player <= 0:
            alert(msg.playerLose);
            break;

          case ballsCount.pc <= 0:
            alert(msg.pcLose);
            break;

          default:
            fate = 1;
            return start(fate);
        }
      }
      if (ballsCount.player === 0 || ballsCount.pc === 0) {
        ballsCount.player = 5;
        ballsCount.pc = 5;
          confirm(msg.newGame) ? game() : alert(msg.seeU);
      }
    };
    return start(fate);
  };
  window.marble = game;
})();
