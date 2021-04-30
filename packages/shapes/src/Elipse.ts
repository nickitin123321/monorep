import { Shape } from ".";

export default class Elipse implements Shape {
  name: string = 'square';
  radiusY: number;
  radiusX: number; 
  centerPointX: number;
  centerPointY: number;
  constructor(radiusY: number, radiusX: number, centerPointX: number, centerPointY: number) {
    this.radiusY = radiusY;
    this.radiusX = radiusX;
    this.centerPointX = centerPointX;
    this.centerPointY = centerPointY;
  }
}
