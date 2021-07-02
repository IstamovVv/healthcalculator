import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Carrot extends Product {
    constructor() {
        super("Морковь");
        this.nutrients = [
            new Nutrients.VitA(3.4),
            new Nutrients.VitBetaCarotene(33.9),
            new Nutrients.VitAlphaCarotene(14.251),
            new Nutrients.VitE(5.5),
            new Nutrients.VitK(0.108),
            new Nutrients.VitC(14.6),
            new Nutrients.VitB1(0.5),
            new Nutrients.VitB2(0.4),
            new Nutrients.VitB3(6.6),
            new Nutrients.VitB4(72.1),
            new Nutrients.VitB5(1.5),
            new Nutrients.VitB6(1),
            new Nutrients.VitB9(55, unitsEnum.mkg),
            new Nutrients.Calcium(212),
            new Nutrients.Iron(3.9),
            new Nutrients.Magnesium(118),
            new Nutrients.Phosphorus(346),
            new Nutrients.Potassium(2540),
            new Nutrients.Sodium(275),
            new Nutrients.Zinc(1.6),
            new Nutrients.Copper(0.4),
            new Nutrients.Manganese(1.1),
            new Nutrients.Selenium(8.6, unitsEnum.mkg)
        ]
    }
}