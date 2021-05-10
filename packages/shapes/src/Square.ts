import Rect from './Rect';

export default class Square extends Rect {
  side: number;
  name: string = 'ssquare';
  constructor(side: number, centerPointX: number, centerPointY: number) {
    super(side, side, centerPointX, centerPointY);
    this.side = side;
  }
}
