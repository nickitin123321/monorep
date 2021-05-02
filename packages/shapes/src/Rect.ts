import Shape from './Shape';

export default class Rect implements Shape {
  centerPointX: number;
  centerPointY: number;
  name: string = 'rect';
  longSide: number;
  shortSide: number;
  constructor(longSide: number, shortSide: number, centerPointX: number, centerPointY: number) {
    this.centerPointX = centerPointX;
    this.centerPointY = centerPointY;
    this.longSide = longSide;
    this.shortSide = shortSide;
  }
}
