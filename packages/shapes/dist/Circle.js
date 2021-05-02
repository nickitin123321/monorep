import Elipse from './Elipse.js';
export default class Circle extends Elipse {
    constructor(radius, centerPointX, centerPointY) {
        super(radius, radius, centerPointX, centerPointY);
        this.name = 'circle';
        this.radius = radius;
    }
}
