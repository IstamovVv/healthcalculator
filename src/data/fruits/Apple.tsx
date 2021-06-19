import {Fruit} from "../Product";
import * as Nutrients from "../nutrients/Nutrients";

export default class Apple extends Fruit {
    constructor() {
        super("Яблоко");
        this.nutrients = [
            new Nutrients.Calcium(6),
            new Nutrients.Iron(0.1),
            new Nutrients.Magnesium(5),
            new Nutrients.Phosphorus(11),
            new Nutrients.Potassium(107),
            new Nutrients.Sodium(1),
            new Nutrients.Copper(30),
            new Nutrients.Fluorine(3.3),
            new Nutrients.VitA(3.0),
            new Nutrients.VitE(0.2),
            new Nutrients.VitK(2.2),
            new Nutrients.VitC(4.6),
            new Nutrients.VitB1(20),
            new Nutrients.VitB2(30),
            new Nutrients.VitB3(0.9),
            new Nutrients.VitB4(34),
            new Nutrients.VitB5(600),
            new Nutrients.VitB6(400),
            new Nutrients.VitB9(30),
        ];
    }
}