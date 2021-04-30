import { Square } from '@monorepo/shapes';
export default class Drawer {
    side: number;
    ctx: CanvasRenderingContext2D;
    xCoord: number;
    yCoord: number;
    constructor(shape: Square, ctx: CanvasRenderingContext2D);
    drawSquare(): void;
}
