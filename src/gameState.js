import snakeMoveFn from "./snake";

const gameState = {
  boardDimentions: {
    rows: 30,
    cols: 30,
    cellWidth: 10,
    cellHeight: 10,
  },
  snake: {
    movingRate: 10,
    left: 0,
    top: 0,
    currentDirection: "y",
    tail: [],
  },
  tick() {},
  moveSnake() {
    const boardLimits = this.boardDimentions.rows * 10;
    if (this.snake.currentDirection == "x") {
      if (this.snake.left == boardLimits - 10) {
        this.snake.left = 0;
      } else if (this.snake.left < 0) {
        this.snake.left = boardLimits;
      } else {
        this.snake.left += this.snake.movingRate;
      }
      console.log(this.snake.left);
      snakeMoveFn(this.snake.left, this.snake.top);
    } else {
      if (this.snake.top == boardLimits - 10) {
        this.snake.top = 0;
      } else if (this.snake.top < 0) {
        this.snake.top = boardLimits;
      } else {
        this.snake.top += this.snake.movingRate;
      }

      snakeMoveFn(this.snake.left, this.snake.top);
    }
  },
};

export default gameState;

/*
  INIT
  MOVING
  EATING
  CRASHING
*/
