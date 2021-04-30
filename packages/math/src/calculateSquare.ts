import { Circle,  Square } from '@monorepo/shapes';
export default function calculateCircleSquare(shape: Circle | Square ) {
  switch (shape.name) {
    case 'square': {
      return shape.side * shape.side;
    }

    case 'circle': {
     return shape.radius ** 2 * Math.PI;
    }

    // case 'rect': {
    //   return shape.longSide * shape.shortSide;
    //  }

    default: {
      return 0;
    }
  }
}
