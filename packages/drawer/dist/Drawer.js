var Drawer = /** @class */ (function () {
    function Drawer(shape, ctx) {
        this.side = shape.side;
        this.ctx = ctx;
        this.xCoord = shape.centerPointX;
        this.yCoord = shape.centerPointY;
    }
    Drawer.prototype.drawSquare = function () {
        this.ctx.strokeRect(this.xCoord, this.yCoord, this.side, this.side);
    };
    return Drawer;
}());
export default Drawer;
