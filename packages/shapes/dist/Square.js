import Rect from './Rect';
export default class Square extends Rect {
    constructor(side, centerPointX, centerPointY) {
        super(side, side, centerPointX, centerPointY);
        this.name = 'square';
        this.side = side;
    }
}
