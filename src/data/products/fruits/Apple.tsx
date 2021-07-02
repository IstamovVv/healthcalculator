import { Fruit } from "../../Product";
import * as Nutrients from "../../nutrients/Nutrients";
import { unitsEnum } from "../../nutrients/UnitsEnum";

export default class Apple extends Fruit {
  constructor() {
    super("Яблоко");
    this.nutrients = [
      new Nutrients.Calcium(6),
      new Nutrients.Iron(0.1),
      new Nutrients.Magnesium(5),
      new Nutrients.Phosphorus(11),
      new Nutrients.Potassium(107),
      new Nutrients.Sodium(1),
      new Nutrients.Copper(30, unitsEnum.mkg),
      new Nutrients.Fluorine(1.8),
      new Nutrients.VitA(3.0, unitsEnum.mkg),
      new Nutrients.VitE(0.2),
      new Nutrients.VitK(2.2, unitsEnum.mkg),
      new Nutrients.VitC(4.6),
      new Nutrients.VitB1(0.02),
      new Nutrients.VitB2(30),
      new Nutrients.VitB3(0.9),
      new Nutrients.VitB4(34),
      new Nutrients.VitB5(600, unitsEnum.mkg),
      new Nutrients.VitB6(400, unitsEnum.mkg),
      new Nutrients.VitB9(30, unitsEnum.mkg),
    ];
  }
}
