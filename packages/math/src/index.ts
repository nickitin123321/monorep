import { Circle, Square, Rect, Elipse } from '@monorepoww/shapes';

function calculateCirclePerimeter(shape: Circle) {
  return shape.radius * 2 * Math.PI;
}

 function calculateSquarePerimeter(shape: Square){
  return 4 * shape.side;
}

 function calculateRectPerimeter(shape: Rect){
  return 2 * shape.longSide + 2 * shape.shortSide;
}

function calculateCircleArea(shape: Circle) {
  return shape.radius ** 2 * Math.PI;
}

 function calculateSquareArea(shape: Square){
  return shape.side * shape.side;
}

 function calculateRectArea(shape: Rect){
  return shape.longSide * shape.shortSide;
}

 function calculateElipseArea(shape: Elipse){
  return shape.radiusY * shape.radiusX * Math.PI;
}

export{
  calculateCircleArea,
  calculateSquareArea,
  calculateRectArea,
  calculateElipseArea,
  calculateCirclePerimeter,
  calculateSquarePerimeter,
  calculateRectPerimeter
}
