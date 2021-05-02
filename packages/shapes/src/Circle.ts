import Elipse  from './Elipse';
export default class Circle extends Elipse {
  radius: number;
  name: string = 'circle';
  constructor(radius: number, centerPointX: number, centerPointY: number) {
    super(radius, radius, centerPointX, centerPointY);
    this.radius = radius;
  }
}
