export default class PenTool {
  constructor(grid) {
    this.grid = grid;
  }

  paint(x, y, color) {
    this.grid.setColor(x, y, color);
  }
  erase(col, row) {
    this.grid.setColor(col, row, '#ffffff');
  }
}
  