import Grid from './Grid.js';
import PenTool from './Tool.js';

export default class App {
  constructor(root) {
    this.root = root;

    this.canvas = document.createElement('canvas');
    this.canvas.width = 640;
    this.canvas.height = 480;
    this.canvas.style.border = '1px solid #333';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = '20px auto';

    this.ctx = this.canvas.getContext('2d');

    this.grid = new Grid(16, 16, 30);

    this.tool = new PenTool(this.grid);

    this.currentColor = '#000000';
    this.currentTool = 'pen';
  }

  start() {
    this.root.appendChild(this.canvas);

    // Color Picker
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#000000';

    colorPicker.addEventListener('input', (e) => {
      this.currentColor = e.target.value;
    });

    this.root.appendChild(colorPicker);

    // Pen knop
    const penButton = document.createElement('button');
    penButton.textContent = 'Pen';

    penButton.addEventListener('click', () => {
      this.currentTool = 'pen';
    });

    this.root.appendChild(penButton);

    // Eraser knop
    const eraserButton = document.createElement('button');
    eraserButton.textContent = 'Eraser';

    eraserButton.addEventListener('click', () => {
      this.currentTool = 'eraser';
    });

    this.root.appendChild(eraserButton);

    // Clear knop
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';

    clearButton.addEventListener('click', () => {
      this.grid.clear();
      this.grid.draw(this.ctx);
    });

    this.root.appendChild(clearButton);

    this.grid.draw(this.ctx);

    this.canvas.addEventListener('click', (event) => {

      const rect = this.canvas.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const col = Math.floor(x / this.grid.cellSize);
      const row = Math.floor(y / this.grid.cellSize);

      if (this.currentTool === 'pen') {
        this.tool.paint(col, row, this.currentColor);
      } else {
        this.tool.erase(col, row);
      }

      this.grid.draw(this.ctx);
    });
  }
}