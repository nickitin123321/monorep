import { Circle, Elipse, Rect, Square } from '../../shapes/dist/index.js';
export default class Drawer {
    constructor(shape, ctx) {
        this.side = 0;
        this.radius = 0;
        this.longSide = 0;
        this.shortSide = 0;
        this.radiusX = 0;
        this.radiusY = 0;
        this.ctx = ctx;
        this.xCoord = shape.centerPointX;
        this.yCoord = shape.centerPointY;
        if (shape instanceof Square) {
            this.side = shape.side;
        }
        if (shape instanceof Circle) {
            this.radius = shape.radius;
        }
        if (shape instanceof Rect) {
            this.longSide = shape.longSide;
            this.shortSide = shape.shortSide;
        }
        if (shape instanceof Elipse) {
            this.radiusX = shape.radiusX;
            this.radiusY = shape.radiusY;
        }
    }
    drawSquare() {
        this.ctx.strokeRect(this.xCoord, this.yCoord, this.side, this.side);
    }
    drawRect() {
        this.ctx.strokeRect(this.xCoord, this.yCoord, this.longSide, this.shortSide);
    }
    drawCircle() {
        this.ctx.beginPath();
        this.ctx.arc(this.xCoord, this.yCoord, this.radius, 0, 2 * Math.PI, true);
        this.ctx.stroke();
    }
    drawElipse() {
        this.ctx.ellipse(this.xCoord, this.yCoord, this.radiusX, this.radiusY, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}
