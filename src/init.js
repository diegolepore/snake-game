import initBoard from "./board";
import gameState from "./gameState";
import { TICK_RATE } from "./constants";

function init() {
  let nextTimeToTick = Date.now();

  const { rows, cols, cellWidth, cellHeight } = gameState.boardDimentions;

  initBoard(rows, cols, cellWidth, cellHeight);

  function nextAnimationFrame() {
    let now = Date.now();

    // console.log("now", now);

    if (nextTimeToTick <= now) {
      nextTimeToTick = now + TICK_RATE;
      // console.log("Tick");
      gameState.moveSnake();
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
