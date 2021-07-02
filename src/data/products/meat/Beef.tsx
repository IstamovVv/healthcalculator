import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Beef extends Product {
    constructor() {
        super("Говядина");
        this.nutrients = [
            new Nutrients.VitB1(0.1),
            new Nutrients.VitB2(0.3),
            new Nutrients.VitB3(5.8),
            new Nutrients.VitB4(86),
            new Nutrients.VitB5(0.5),
            new Nutrients.VitB6(0.6),
            new Nutrients.VitB12(2.9, unitsEnum.mkg),
            new Nutrients.Iron(3),
            new Nutrients.Manganese(21),
            new Nutrients.Phosphorus(237),
            new Nutrients.Potassium(339),
            new Nutrients.Sodium(64),
            new Nutrients.Zinc(6.9),
            new Nutrients.Copper(0.1),
            new Nutrients.Selenium(31.3, unitsEnum.mkg)
        ]
    }
}