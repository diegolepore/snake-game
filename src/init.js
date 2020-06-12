import gameState from "./gameState";
import Snake from "./snake";
import initBoard from "./board";
import initControls from "./controls";
import Food from "./food";
import { TICK_RATE } from "./constants";

function init() {
  const { rows, cols, cellWidth, cellHeight } = gameState.boardDimentions;
  const SnakeObj = new Snake();
  const FoodObj = new Food();
  initBoard(rows, cols, cellWidth, cellHeight);
  initControls(SnakeObj);
  FoodObj.initFood();

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    let now = Date.now();

    if (nextTimeToTick <= now) {
      nextTimeToTick = now + TICK_RATE;
      SnakeObj.moveSnake(FoodObj);
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
