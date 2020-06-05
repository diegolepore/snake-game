// import gameState from "./gameState"

export default function snake(left, top) {
  const snakeHead = document.querySelector(".snake__head");

  snakeHead.style.left = `${left}px`;
  snakeHead.style.top = `${top}px`;
}
