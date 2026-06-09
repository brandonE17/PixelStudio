export default class Tool {
  constructor(grid) {
    this.grid = grid;
  }

  paint(x, y, color) {
    this.grid.setColor(x, y, color);
  }
}
  