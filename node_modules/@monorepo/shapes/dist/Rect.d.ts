import Shape from './Shape';
export default class Rect implements Shape {
    centerPointX: number;
    centerPointY: number;
    name: string;
    longSide: number;
    shortSide: number;
    constructor(longSide: number, shortSide: number, centerPointX: number, centerPointY: number);
}
