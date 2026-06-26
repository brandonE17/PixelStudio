import Pixel from './Pixel.js';

export default class Grid {
  constructor(cols, rows, cellSize, defaultColor = '#ffffff') {
    this.cols = cols;
    this.rows = rows;
    this.cellSize = cellSize;
    this.pixels = [];

    for (let y = 0; y < rows; y++) {
      const row = [];

      for (let x = 0; x < cols; x++) {
        row.push(
          new Pixel(
            x * cellSize,
            y * cellSize,
            cellSize,
            defaultColor
          )
        );
      }

      this.pixels.push(row);
    }
  }

  draw(ctx) {
    ctx.clearRect(
      0,
      0,
      this.cols * this.cellSize,
      this.rows * this.cellSize
    );

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.pixels[y][x].draw(ctx);
      }
    }
  }

  setColor(col, row, color) {
    if (
      col < 0 ||
      col >= this.cols ||
      row < 0 ||
      row >= this.rows
    ) {
      return;
    }

    this.pixels[row][col].setColor(color);
  }

  clear() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.pixels[y][x].setColor('#ffffff');
      }
    }
  }
}