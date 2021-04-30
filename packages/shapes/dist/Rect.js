"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square(longSide, shortSide, centerPointY, centerPointX) {
        this.name = 'square';
        this.centerPointX = centerPointX;
        this.centerPointY = centerPointY;
        this.longSide = longSide;
        this.shortSide = shortSide;
    }
    return Square;
}());
exports.default = Square;
