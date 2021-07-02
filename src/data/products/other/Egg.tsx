import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import {unitsEnum} from "../../nutrients/UnitsEnum";

export class Egg extends Product {
    constructor() {
        super("Яйцо");
        this.nutrients = [
            new Nutrients.VitA(149, unitsEnum.mkg),
            new Nutrients.VitE(2.2, unitsEnum.mkg),
            new Nutrients.VitD3(2.2, unitsEnum.mkg),
            new Nutrients.VitE(1),
            new Nutrients.VitB1(0.1),
            new Nutrients.VitB2(0.5),
            new Nutrients.VitB4(293),
            new Nutrients.VitB5(1.4),
            new Nutrients.VitB6(0.1),
            new Nutrients.VitB9(44),
            new Nutrients.VitB12(1.1, unitsEnum.mkg),
            new Nutrients.Calcium(50),
            new Nutrients.Iron(1.2),
            new Nutrients.Phosphorus(172),
            new Nutrients.Magnesium(10),
            new Nutrients.Phosphorus(172),
            new Nutrients.Sodium(124),
            new Nutrients.Zinc(1.1),
            new Nutrients.Selenium(30.8, unitsEnum.mkg)
        ]
    }
}