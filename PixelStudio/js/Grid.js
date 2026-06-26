import Pixel from './Pixel.js';


export default class Grid {
  constructor(cols, rows, cellSize, defaultColor = '#ffffff') {
    this.cols = cols;
    this.rows = rows;
    this.cellSize = cellSize;
    this.pixels = [];
 
  import Pixel from './Pixel.js';


    for (let y = 0; y < rows; y += 1) {
      const row = [];
      for (let x = 0; x < cols; x += 1) {
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
    ctx.clearRect(0, 0, this.cols * this.cellSize, this.rows * this.cellSize);

    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.cols; x += 1) {
        const p = this.pixels[y][x];
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(p.x, p.y, p.size, p.size);
      }
    }
  }
   
  setColor(col, row, color) {
    if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) {
      return;
    }

    this.pixels[row][col].color = color;
  }
}
