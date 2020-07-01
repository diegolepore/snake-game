import gameState from "./gameState";

const { boardDimentions } = gameState;

export default class Food {
  constructor() {
    this.randomLeft = null;
    this.randomTop = null;
  }

  randomFoodRelocation() {
    const food = document.querySelector(".food");
    const limit = boardDimentions.rows;
    this.randomLeft = Math.floor(Math.random() * limit) * 10;
    this.randomTop = Math.floor(Math.random() * limit) * 10;

    food.style.left = `${this.randomLeft}px`;
    food.style.top = `${this.randomTop}px`;
  }

  init() {
    this.randomFoodRelocation();
  }
}
