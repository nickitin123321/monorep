import Rect from './Rect';
export default class Square extends Rect {
    constructor(side, centerPointX, centerPointY) {
        super(side, side, centerPointX, centerPointY);
        this.name = 'ssquare';
        this.side = side;
    }
}
