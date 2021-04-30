import { Square } from '@monorepo/shapes';

export default class Drawer {
  side: number;
  ctx: CanvasRenderingContext2D;
  xCoord: number;
  yCoord: number;
  constructor(shape: Square, ctx: CanvasRenderingContext2D) {
    this.side = shape.side;
    this.ctx = ctx;
    this.xCoord = shape.centerPointX;
    this.yCoord = shape.centerPointY;
  }

  drawSquare() {
    this.ctx.strokeRect(this.xCoord, this.yCoord, this.side, this.side);
  }
}