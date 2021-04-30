import Shape from './Shape';
export default class Square implements Shape {
    centerPointX: number;
    centerPointY: number;
    name: string;
    longSide: number;
    shortSide: number;
    constructor(longSide: number, shortSide: number, centerPointY: number, centerPointX: number);
}
