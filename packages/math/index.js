"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shapes_1 = require("@monorepo/shapes");
var calculateSquare_1 = __importDefault(require("./calculateSquare"));
var circle1 = new shapes_1.Circle(10, 1, 1);
var circle2 = new shapes_1.Circle(20, 0, 1);
var square1 = new shapes_1.Square(10, 1, 2);
console.log(calculateSquare_1.default(circle1));
