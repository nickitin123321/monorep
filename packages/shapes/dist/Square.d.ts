import { Rect } from './index';
export default class Square extends Rect {
    side: number;
    name: string;
    constructor(side: number, centerPointY: number, centerPointX: number);
}
