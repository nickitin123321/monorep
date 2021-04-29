"use strict";
var drawer = require('@monorepo/drawer');
var Circle = /** @class */ (function () {
    function Circle(name, radius, centerPointX, centerPointY) {
        this.name = name;
        this.radius = radius;
        this.centerPointX = centerPointX;
        this.centerPointY = centerPointY;
    }
    return Circle;
}());
// class Rect extends Shape{
//     constructor(){
//        super() 
//     }
// } 
// class Square extends Rect{
//     constructor(){
//         super()
//     }
// }
// class Elipse extends Circle{
//     constructor(){
//         super()
//     }
// }
var circle1 = new Circle('circle1', 10, 1, 1);
//console.log(circle);
console.log(circle1);
module.exports = { circle1: circle1 };
