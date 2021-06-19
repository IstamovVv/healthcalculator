import {unitsEnum} from "./UnitsEnum";

export default class Nutrient {
    constructor(name: string, type: string, value:number, unit: unitsEnum) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.unit = unit;
    }

    public name: string;
    public type: string;
    public value: number;
    public unit: unitsEnum;
}

export class Mineral extends Nutrient {
    constructor(name: string, value: number, unit: unitsEnum) {
        super(name, "Mineral", value, unit);
    }
}

export class Vitamin extends Nutrient {
    constructor(name: string, value: number, unit: unitsEnum) {
        super(name, "Vitamin", value, unit);
    }
}