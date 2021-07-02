import Product from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import { unitsEnum } from "../../nutrients/UnitsEnum";

export class Cheese extends Product {
  constructor() {
    super("Сыр");
    this.nutrients = [
      new Nutrients.VitA(288, unitsEnum.mkg),
      new Nutrients.VitBetaCarotene(61, unitsEnum.mkg),
      new Nutrients.VitE(0.6),
      new Nutrients.VitK(1.4, unitsEnum.mkg),
      new Nutrients.VitB2(300),
      new Nutrients.VitB4(15.5),
      new Nutrients.VitB5(400, unitsEnum.mkg),
      new Nutrients.VitB6(100, unitsEnum.mkg),
      new Nutrients.VitB9(10, unitsEnum.mkg),
      new Nutrients.VitB12(3.1),
      new Nutrients.Calcium(890),
      new Nutrients.Iron(0.1),
      new Nutrients.Magnesium(33),
      new Nutrients.Phosphorus(574),
      new Nutrients.Potassium(72),
      new Nutrients.Sodium(187),
      new Nutrients.Zinc(4.4),
      new Nutrients.Copper(46.8, unitsEnum.mkg),
      new Nutrients.Selenium(30),
    ];
  }
}
