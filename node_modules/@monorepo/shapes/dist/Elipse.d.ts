import Shape from './Shape';
export default class Elipse implements Shape {
    name: string;
    radiusY: number;
    radiusX: number;
    centerPointX: number;
    centerPointY: number;
    constructor(radiusY: number, radiusX: number, centerPointX: number, centerPointY: number);
}
