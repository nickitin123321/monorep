import { Circle, Square, Rect, Elipse } from '@monorepo123321/shapes';

function calculateArea(shape: Circle | Square | Rect | Elipse): number {
  if (shape instanceof Circle) {
    const rv = shape.radius ** 2 * Math.PI;
    console.log('Circle area:', rv);
    console.log('123321');
    return rv;
  }

  if (shape instanceof Square) {
    return shape.side * shape.side;
  }

  if (shape instanceof Rect) {
    return shape.longSide * shape.shortSide;
  }

  if (shape instanceof Elipse) {
    const rv = shape.radiusY * shape.radiusX * Math.PI;
    console.log('Elipse area:', rv);
    return rv;
  }

  return 0;
}

function calculatePerimeter(shape: Circle | Square | Rect | Elipse): number {
  if (shape instanceof Circle) {
    const rv = shape.radius * 2 * Math.PI;
    console.log('Circle perimeter:', rv);
    return rv;
  }

  if (shape instanceof Square) {
    return 4 * shape.side;
  }

  if (shape instanceof Rect) {
    return 2 * shape.longSide + 2 * shape.shortSide;
  }

  if (shape instanceof Elipse) {
    return (
      (4 * (shape.radiusY * shape.radiusX * Math.PI + (shape.radiusX - shape.radiusY))) /
      (shape.radiusX + shape.radiusY)
    );
  }

  return 0;
}

export { calculateArea, calculatePerimeter };
