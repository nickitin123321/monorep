import { Circle, Square, Rect, Elipse } from '@monorepo/shapes/src/index.js';
declare function calculateArea(shape: Circle | Square | Rect | Elipse): number;
declare function calculatePerimeter(shape: Circle | Square | Rect | Elipse): number;
export { calculateArea, calculatePerimeter };
