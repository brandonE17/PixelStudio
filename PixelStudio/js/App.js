import Grid from './Grid.js';
import Tool from './Tool.js';

export default class App {
  constructor(root) {
    this.root = root;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.canvas.style.border = '1px solid #333';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = '0 auto';

    this.ctx = this.canvas.getContext('2d');
    this.grid = new Grid(16, 16, 30);
    this.tool = new Tool(this.grid);
  } 

  start() {
    this.root.appendChild(this.canvas);
    this.grid.draw(this.ctx);

    this.canvas.addEventListener('click', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const color = '#000000'; 
      this.tool.paint(Math.floor(x / this.grid.cellSize), Math.floor(y / this.grid.cellSize), color);
      this.grid.draw(this.ctx);
    });
  }
}
