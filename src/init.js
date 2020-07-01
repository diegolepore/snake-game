import gameState from "./gameState";
import Snake from "./snake";
import Board from "./board";
import Food from "./food";
import Controls from "./controls";

function init() {
  const { boardDimentions, tickRate } = gameState;
  const { rows, cols, cellWidth, cellHeight } = boardDimentions;

  // Objects instances
  const BoardObj = new Board();
  const ControlsObj = new Controls();
  const SnakeObj = new Snake();
  const FoodObj = new Food();

  // Initializations
  BoardObj.init(rows, cols, cellWidth, cellHeight);
  ControlsObj.init(SnakeObj);
  FoodObj.init();

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    let now = Date.now();

    if (nextTimeToTick <= now) {
      nextTimeToTick = now + tickRate;
      SnakeObj.moveSnake(FoodObj);
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
