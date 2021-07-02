import { Fruit } from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import { unitsEnum } from "../../nutrients/UnitsEnum";

class Avocado extends Fruit {
  constructor() {
    super("Авокадо");
    this.nutrients = [
      new Nutrients.Calcium(12),
      new Nutrients.Iron(0.6),
      new Nutrients.Magnesium(29),
      new Nutrients.Phosphorus(52),
      new Nutrients.Potassium(485),
      new Nutrients.Sodium(7),
      new Nutrients.Zinc(0.6),
      new Nutrients.Copper(200, unitsEnum.mkg),
      new Nutrients.Manganese(100, unitsEnum.mkg),
      new Nutrients.Selenium(0.4),
      new Nutrients.Fluorine(7),
      new Nutrients.VitE(2.1),
      new Nutrients.VitK(21, unitsEnum.mkg),
      new Nutrients.VitC(10),
      new Nutrients.VitB1(100, unitsEnum.mkg),
      new Nutrients.VitB2(100),
      new Nutrients.VitB3(1.7),
      new Nutrients.VitB4(14.2),
      new Nutrients.VitB5(1400, unitsEnum.mkg),
      new Nutrients.VitB6(600, unitsEnum.mkg),
      new Nutrients.VitB9(81, unitsEnum.mkg),
    ];
  }
}

export default Avocado;
