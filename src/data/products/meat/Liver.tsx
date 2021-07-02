import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Liver extends Product {
    constructor() {
        super("Печень");
        this.nutrients = [
            new Nutrients.VitA(9.42),
            new Nutrients.VitD(1.2, unitsEnum.mkg),
            new Nutrients.VitD3(1.2, unitsEnum.mkg),
            new Nutrients.VitB1(0.2),
            new Nutrients.VitB2(3.4),
            new Nutrients.VitB3(17.5),
            new Nutrients.VitB4(426),
            new Nutrients.VitB5(7.1),
            new Nutrients.VitB6(1),
            new Nutrients.VitB9(253),
            new Nutrients.VitB12(70.6),
            new Nutrients.Iron(6.5),
            new Nutrients.Magnesium(21),
            new Nutrients.Phosphorus(497),
            new Nutrients.Potassium(352),
            new Nutrients.Sodium(79),
            new Nutrients.Zinc(5.3),
            new Nutrients.Copper(14.3),
            new Nutrients.Manganese(0.4),
            new Nutrients.Selenium(36.1)
        ]
    }
}