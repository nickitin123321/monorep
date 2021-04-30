import { Circle, Square, Rect, Elipse } from '@monorepo/shapes';
declare function calculateCirclePerimeter(shape: Circle): number;
declare function calculateSquarePerimeter(shape: Square): number;
declare function calculateRectPerimeter(shape: Rect): number;
declare function calculateCircleArea(shape: Circle): number;
declare function calculateSquareArea(shape: Square): number;
declare function calculateRectArea(shape: Rect): number;
declare function calculateElipseArea(shape: Elipse): number;
export { calculateCircleArea, calculateSquareArea, calculateRectArea, calculateElipseArea, calculateCirclePerimeter, calculateSquarePerimeter, calculateRectPerimeter };
