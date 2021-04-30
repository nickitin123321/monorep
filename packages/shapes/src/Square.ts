import Rect from './Rect';

export default class Square extends Rect {
  side: number;
  name: string = 'square';
  constructor(side: number, centerPointY: number, centerPointX: number) {
    super(side, side, centerPointX, centerPointY);
    this.side = side;
  }
}
