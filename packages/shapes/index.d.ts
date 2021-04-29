declare const drawer: any;
interface Shape {
    centerPointX: number;
    centerPointY: number;
    name: string;
}
declare class Circle implements Shape {
    name: string;
    radius: number;
    centerPointX: number;
    centerPointY: number;
    constructor(name: string, radius: number, centerPointX: number, centerPointY: number);
}
declare const circle1: Shape;
