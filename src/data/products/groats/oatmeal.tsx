import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Oatmeal extends Product {
    constructor() {
        super("Овсянка");
        this.nutrients = [
            new Nutrients.VitB1(0.8),
            new Nutrients.VitB2(0.1),
            new Nutrients.VitB3(1),
            new Nutrients.VitB5(1.3),
            new Nutrients.VitB6(0.1),
            new Nutrients.VitB9(56, unitsEnum.mkg),
            new Nutrients.Calcium(54),
            new Nutrients.Iron(4.7),
            new Nutrients.Magnesium(117),
            new Nutrients.Phosphorus(523),
            new Nutrients.Potassium(429),
            new Nutrients.Zinc(4),
            new Nutrients.Copper(0.6),
            new Nutrients.Magnesium(4.9)
        ]
    }
}