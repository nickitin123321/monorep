import Shape from './Shape';

export default class Square implements Shape {
  centerPointX: number;
  centerPointY: number;
  readonly name = 'square';
  side: number;
  constructor(side: number, centerPointY: number, centerPointX: number, ) {
    this.centerPointX = centerPointX;
    this.centerPointY = centerPointY;
    this.side = side;
  }
}
