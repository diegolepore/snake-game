import gameState from "./gameState";

const { boardDimentions } = gameState;

export default class Food {
  constructor() {
    this.randomLeft = -1;
    this.randomTop = -1;
  }

  randomFoodRelocation() {
    const food = document.querySelector(".food");
    const limit = boardDimentions.rows;
    this.randomLeft = Math.floor(Math.random() * limit) * 10;
    this.randomTop = Math.floor(Math.random() * limit) * 10;

    food.style.left = `${this.randomLeft}px`;
    food.style.top = `${this.randomTop}px`;
  }

  initFood() {
    this.randomFoodRelocation();
  }
}
