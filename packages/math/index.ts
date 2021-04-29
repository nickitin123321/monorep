import { Shape, Circle, Square } from '@monorepo/shapes';
import calculatePerimeter from './calculatePerimeter';
import calculateSquare from './calculateSquare';

const circle1 = new Circle(10, 1, 1);
const circle2 = new Circle(20, 0, 1);
const square1 = new Square(10, 1, 2);

console.log(calculateSquare(circle1));
