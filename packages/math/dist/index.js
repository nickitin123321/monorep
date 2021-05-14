import { Circle, Square, Rect, Elipse } from '@nickitin123321/shapes';
function calculateArea(shape) {
    if (shape instanceof Circle) {
        const rv = Math.pow(shape.radius, 2) * Math.PI;
        console.log('Circle area:', rv);
        return rv;
    }
    if (shape instanceof Square) {
        const rv = shape.side * shape.side;
        console.log('Square area:', rv);
        return rv;
    }
    if (shape instanceof Rect) {
        const rv = shape.longSide * shape.shortSide;
        console.log('Rect area:', rv);
        return rv;
    }
    if (shape instanceof Elipse) {
        const rv = shape.radiusY * shape.radiusX * Math.PI;
        console.log('Elipse area:', rv);
        return rv;
    }
    return 0;
}
function calculatePerimeter(shape) {
    if (shape instanceof Circle) {
        const rv = shape.radius * 2 * Math.PI;
        console.log('Circle perimeter:', rv);
        return rv;
    }
    if (shape instanceof Square) {
        const rv = 4 * shape.side;
        console.log('Square perimeter:', 4 * shape.side);
        return rv;
    }
    if (shape instanceof Rect) {
        const rv = 2 * shape.longSide + 2 * shape.shortSide;
        //console.log('Rect perimeter:', 2 * shape.longSide + 2 * shape.shortSide);
        return rv;
    }
    if (shape instanceof Elipse) {
        const rv = (4 * (shape.radiusY * shape.radiusX * Math.PI + (shape.radiusX - shape.radiusY))) /
            (shape.radiusX + shape.radiusY);
        console.log('Elipse perimeter:', rv);
        return rv;
    }
    return 0;
}
export { calculateArea, calculatePerimeter };
