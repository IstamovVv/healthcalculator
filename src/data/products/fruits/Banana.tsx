import { Fruit } from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import { unitsEnum } from "../../nutrients/UnitsEnum";

class Banana extends Fruit {
  constructor() {
    super("Банан");
    this.nutrients = [
      new Nutrients.Calcium(5),
      new Nutrients.Iron(0.3),
      new Nutrients.Magnesium(27),
      new Nutrients.Phosphorus(22),
      new Nutrients.Potassium(358),
      new Nutrients.Sodium(1),
      new Nutrients.Zinc(0.2),
      new Nutrients.Copper(100, unitsEnum.mkg),
      new Nutrients.Manganese(300, unitsEnum.mkg),
      new Nutrients.Selenium(1),
      new Nutrients.VitC(8.7),
      new Nutrients.VitB1(0.03),
      new Nutrients.VitB2(70),
      new Nutrients.VitB3(0.67),
      new Nutrients.VitB4(9.8),
      new Nutrients.VitB5(330, unitsEnum.mkg),
      new Nutrients.VitB6(370, unitsEnum.mkg),
      new Nutrients.VitB9(200, unitsEnum.mkg),
    ];
  }
}

export default Banana;
