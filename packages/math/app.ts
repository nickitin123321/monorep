const circle1 = require('@monorepo/shapes');
interface Shape{
    centerPointX: number;
    centerPointY: number;
    name: string;
}

const calculatePerimeter = (shape: Shape): string => {
    // switch(figureName){ 
    //     case 'square': { 
    //         perimeter = 4 * a;
    //        break; 
    //     } 
    //     case 'rect': { 
    //         perimeter = a * b;
    //        break; 
    //     } 
    //     case 'circle':{
    //         perimeter = 2 * Math.PI * r 
    //     }
    // }
    // return  perimeter
    return shape.name
    
 }

console.log(circle1);


