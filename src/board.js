export default class Board {
  init(rows, cols, cellWidth, cellHeight) {
    const container = document.querySelector(".container");

    for (let i = 0; i < rows; i++) {
      const ul = document.createElement("ul");
      ul.className = "row";

      for (let j = 0; j < cols; j++) {
        const li = document.createElement("li");
        li.style.width = `${cellWidth}px`;
        li.style.height = `${cellHeight}px`;
        li.className = "cell";
        ul.appendChild(li);
      }

      container.appendChild(ul);
    }
  }
}
