"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRectPerimeter = exports.calculateSquarePerimeter = exports.calculateCirclePerimeter = exports.calculateElipseArea = exports.calculateRectArea = exports.calculateSquareArea = exports.calculateCircleArea = void 0;
function calculateCirclePerimeter(shape) {
    return shape.radius * 2 * Math.PI;
}
exports.calculateCirclePerimeter = calculateCirclePerimeter;
function calculateSquarePerimeter(shape) {
    return 4 * shape.side;
}
exports.calculateSquarePerimeter = calculateSquarePerimeter;
function calculateRectPerimeter(shape) {
    return 2 * shape.longSide + 2 * shape.shortSide;
}
exports.calculateRectPerimeter = calculateRectPerimeter;
function calculateCircleArea(shape) {
    return Math.pow(shape.radius, 2) * Math.PI;
}
exports.calculateCircleArea = calculateCircleArea;
function calculateSquareArea(shape) {
    return shape.side * shape.side;
}
exports.calculateSquareArea = calculateSquareArea;
function calculateRectArea(shape) {
    return shape.longSide * shape.shortSide;
}
exports.calculateRectArea = calculateRectArea;
function calculateElipseArea(shape) {
    return shape.radiusY * shape.radiusX * Math.PI;
}
exports.calculateElipseArea = calculateElipseArea;
