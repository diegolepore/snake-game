export default function initControls(snake) {
  function keyPressed({ key }) {
    switch (key) {
      case "ArrowRight":
        snake.currentDirection = "right";
        snake.currentAxis = "x";
        console.log(key);
        break;

      case "ArrowLeft":
        snake.currentDirection = "left";
        snake.currentAxis = "x";
        console.log(key);
        break;

      case "ArrowUp":
        snake.currentDirection = "up";
        snake.currentAxis = "y";
        console.log(key);
        break;

      case "ArrowDown":
        snake.currentDirection = "down";
        snake.currentAxis = "y";
        console.log(key);
        break;

      default:
        break;
    }
  }

  document.addEventListener("keydown", keyPressed);
}
