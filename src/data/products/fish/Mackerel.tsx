import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Mackerel extends Product {
    constructor() {
        super("Скумбрия");
        this.nutrients = [
            new Nutrients.VitD(25.2, unitsEnum.mkg),
            new Nutrients.VitD3(25.2, unitsEnum.mkg),
            new Nutrients.VitE(2.4),
            new Nutrients.VitK(7.8, unitsEnum.mkg),
            new Nutrients.VitB2(0.2),
            new Nutrients.VitB3(3.3),
            new Nutrients.VitB4(101.6),
            new Nutrients.VitB6(0.4),
            new Nutrients.VitB12(12, unitsEnum.mkg),
            new Nutrients.Calcium(66),
            new Nutrients.Iron(1.4),
            new Nutrients.Magnesium(66),
            new Nutrients.Phosphorus(254),
            new Nutrients.Potassium(520),
            new Nutrients.Sodium(4450),
            new Nutrients.Zinc(1.1),
            new Nutrients.Copper(0.1),
            new Nutrients.Selenium(73.4, unitsEnum.mkg)
        ]
    }
}