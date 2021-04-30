import { Shape } from '.';

export default class Square implements Shape {
  centerPointX: number;
  centerPointY: number;
  name: string = 'square';
  longSide: number;
  shortSide: number;
  constructor(longSide: number, shortSide: number, centerPointY: number, centerPointX: number, ) {
    this.centerPointX = centerPointX;
    this.centerPointY = centerPointY;
    this.longSide = longSide;
    this.shortSide = shortSide;
  }
}
