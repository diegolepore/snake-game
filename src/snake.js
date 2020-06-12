import gameState from "./gameState";

const { boardDimentions } = gameState;

const tailContainer = document.querySelector(".tail");

export default class Snake {
  constructor() {
    this.movingRate = 10;
    this.left = 0;
    this.top = 0;
    this.currentAxis = "x";
    this.currentDirection = "right";
    this.tailLength = 0;
    this.tail = [];
  }

  moveHelper(left, top, snakePortion) {
    const snakeHead = document.querySelector(`.${snakePortion}`);

    snakeHead.style.left = `${left}px`;
    snakeHead.style.top = `${top}px`;
  }

  checkEatingCollision(foodObj) {
    const snakeCoordinates = `${this.left} ${this.top}`;
    const foodCoordinates = `${foodObj.randomLeft} ${foodObj.randomTop}`;

    if (snakeCoordinates == foodCoordinates) {
      const tailPiece = document.createElement("div");
      tailPiece.className = "snake__tail";
      tailContainer.appendChild(tailPiece);

      ++this.tailLength;
      foodObj.randomFoodRelocation();
    }
  }

  moveSnakeTail() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.tailLength - 1] = { left: this.left, top: this.top };

    for (let index = 0; index < this.tail.length; index++) {
      this.moveHelper(
        this.tail[index].left,
        this.tail[index].top,
        `snake__tail:nth-child(${index + 1})`
      );
    }

    console.log(`Tail 🐍`, this.tail);
  }

  moveSnake(foodObj) {
    const boardLimits = boardDimentions.rows * 10;

    this.moveSnakeTail();

    if (this.currentAxis == "x") {
      if (this.left == boardLimits - 10 && this.currentDirection == "right") {
        this.left = 0;
      } else if (this.left == 0 && this.currentDirection == "left") {
        this.left = boardLimits - 10;
      } else {
        if (this.currentDirection == "right") {
          this.left += this.movingRate;
        } else {
          this.left -= this.movingRate;
        }
      }
    } else {
      if (this.top == boardLimits - 10 && this.currentDirection == "down") {
        this.top = 0;
      } else if (this.top == 0 && this.currentDirection == "up") {
        this.top = boardLimits - 10;
      } else {
        if (this.currentDirection == "down") {
          this.top += this.movingRate;
        } else {
          this.top -= this.movingRate;
        }
      }
    }

    this.moveHelper(this.left, this.top, "snake__head");

    this.checkEatingCollision(foodObj);
  }
}
