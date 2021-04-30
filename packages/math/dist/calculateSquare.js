"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCircleSquare(shape) {
    switch (shape.name) {
        case 'square': {
            return shape.side * shape.side;
        }
        case 'circle': {
            return Math.pow(shape.radius, 2) * Math.PI;
        }
        // case 'rect': {
        //   return shape.longSide * shape.shortSide;
        //  }
        default: {
            return 0;
        }
    }
}
exports.default = calculateCircleSquare;
