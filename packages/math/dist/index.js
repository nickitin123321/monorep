import { Circle, Square, Rect, Elipse } from '../../shapes/dist/index.js';
function calculateArea(shape) {
    if (shape instanceof Circle) {
        return Math.pow(shape.radius, 2) * Math.PI;
    }
    if (shape instanceof Square) {
        return shape.side * shape.side;
    }
    if (shape instanceof Rect) {
        return shape.longSide * shape.shortSide;
    }
    if (shape instanceof Elipse) {
        return shape.radiusY * shape.radiusX * Math.PI;
    }
    return 0;
}
function calculatePerimeter(shape) {
    if (shape instanceof Circle) {
        return shape.radius * 2 * Math.PI;
    }
    if (shape instanceof Square) {
        return 4 * shape.side;
    }
    if (shape instanceof Rect) {
        return 2 * shape.longSide + 2 * shape.shortSide;
    }
    if (shape instanceof Elipse) {
        return 4 * ((shape.radiusY * shape.radiusX * Math.PI) + (shape.radiusX - shape.radiusY)) / (shape.radiusX + shape.radiusY);
    }
    return 0;
}
export { calculateArea, calculatePerimeter };
