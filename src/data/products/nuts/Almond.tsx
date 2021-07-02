import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Almond extends Product {
    constructor() {
        super("Миндаль");
        this.nutrients = [
            new Nutrients.VitE(25.6),
            new Nutrients.VitB1(0.2),
            new Nutrients.VitB2(1.1),
            new Nutrients.VitB3(3.6),
            new Nutrients.VitB4(52.1),
            new Nutrients.VitB5(0.5),
            new Nutrients.VitB6(0.1),
            new Nutrients.VitB9(44, unitsEnum.mkg),
            new Nutrients.Calcium(269),
            new Nutrients.Iron(3.7),
            new Nutrients.Magnesium(370),
            new Nutrients.Phosphorus(481),
            new Nutrients.Potassium(733),
            new Nutrients.Zinc(3.1),
            new Nutrients.Copper(1),
            new Nutrients.Manganese(2.2),
            new Nutrients.Selenium(4.1, unitsEnum.mkg)
        ]
    }

}