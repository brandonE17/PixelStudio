export default class Pixel {
  constructor(x, y, size, color = '#ffffff') {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(this.x, this.y, this.size, this.size);
  }

  setColor(color) { 
    this.color = color;
  }
}