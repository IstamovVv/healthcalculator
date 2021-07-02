import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import { unitsEnum } from "../../nutrients/UnitsEnum";

export class Milk extends Product {
  constructor() {
    super("Молоко");
    this.nutrients = [
      new Nutrients.VitA(28, unitsEnum.mkg),
      new Nutrients.VitB1(36, unitsEnum.mkg),
      new Nutrients.VitB2(200),
      new Nutrients.VitB4(16.4),
      new Nutrients.VitB5(400, unitsEnum.mkg),
      new Nutrients.VitB12(0.4, unitsEnum.mkg),
      new Nutrients.Calcium(120),
      new Nutrients.Phosphorus(92),
      new Nutrients.Potassium(140),
      new Nutrients.Sodium(47),
      new Nutrients.Zinc(0.5),
      new Nutrients.Selenium(2.5, unitsEnum.mkg),
    ];
  }
}
