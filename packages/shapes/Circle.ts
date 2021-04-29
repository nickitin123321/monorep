import Shape from './Shape';
export default class Circle implements Shape {
  readonly name = 'circle';
  radius: number;
  centerPointX: number;
  centerPointY: number;
  constructor(radius: number, centerPointX: number, centerPointY: number) {
    this.radius = radius;
    this.centerPointX = centerPointX;
    this.centerPointY = centerPointY;
  }
}
