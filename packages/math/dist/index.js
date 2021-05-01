function calculateCirclePerimeter(shape) {
    return shape.radius * 2 * Math.PI;
}
function calculateSquarePerimeter(shape) {
    return 4 * shape.side;
}
function calculateRectPerimeter(shape) {
    return 2 * shape.longSide + 2 * shape.shortSide;
}
function calculateCircleArea(shape) {
    return Math.pow(shape.radius, 2) * Math.PI;
}
function calculateSquareArea(shape) {
    return shape.side * shape.side;
}
function calculateRectArea(shape) {
    return shape.longSide * shape.shortSide;
}
function calculateElipseArea(shape) {
    return shape.radiusY * shape.radiusX * Math.PI;
}
export { calculateCircleArea, calculateSquareArea, calculateRectArea, calculateElipseArea, calculateCirclePerimeter, calculateSquarePerimeter, calculateRectPerimeter };
