import { Circle, Elipse, Rect, Square } from '@monorepo123321/shapes';
export default class Drawer {
    side: number;
    ctx: CanvasRenderingContext2D;
    xCoord: number;
    yCoord: number;
    radius: number;
    longSide: number;
    shortSide: number;
    radiusY: number;
    radiusX: number;
    constructor(shape: Square | Circle | Rect | Elipse, ctx: CanvasRenderingContext2D);
    drawSquare(): void;
    drawRect(): void;
    drawCircle(): void;
    drawElipse(): void;
}
