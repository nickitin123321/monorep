import Drawer from '@monorepo/drawer';

import { sum } from '@monorepo/math';

interface Shape{
    centerPointX: number;
    centerPointY: number;
    name: string;
}

class Circle implements Shape{
    name: string;
    radius: number;
    centerPointX: number;
    centerPointY: number;

    constructor(name: string, radius: number, centerPointX: number, centerPointY: number){
        this.name = name;
        this.radius = radius;  
        this.centerPointX =  centerPointX;
        this.centerPointY = centerPointY; 
    }
}

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
const circle1: Shape = new Circle('circle1', 10, 1, 1)
//console.log(circle);

console.log(circle1);

module.exports = {circle1}