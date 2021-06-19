/* To add a new nutrient, create a class inheriting from any class from Nutrient.js */
/* Don't forget to add it into the daily rate list */

import {Mineral, Vitamin} from "./Nutrient";
import {unitsEnum} from "./UnitsEnum";

export class Calcium extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Calcium", value, unit);
    }
}

export class Magnesium extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Magnesium", value, unit);
    }
}

export class Sodium extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Sodium", value, unit);
    }
}

export class Potassium extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Potassium", value, unit);
    }
}

export class Phosphorus extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Phosphorus", value, unit);
    }
}

export class Chlorine extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Chlorine", value, unit);
    }
}

export class Sulfur extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Sulfur", value, unit);
    }
}

export class Fiber extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Fiber", value, unit);
    }
}

export class Cellulose extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Cellulose", value, unit);
    }
}

export class Iron extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Iron", value, unit);
    }
}

export class Copper extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("Copper", value, unit);
    }
}

export class Boron extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("Boron", value, unit);
    }
}

export class Zinc extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("Zinc", value, unit);
    }
}

export class Manganese extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("Manganese", value, unit);
    }
}

export class Selenium extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("Selenium", value, unit);
    }
}

export class Fluorine extends Mineral {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("Fluorine", value, unit);
    }
}

export class VitA extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("A", value, unit);
    }
}

export class VitB1 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B1", value, unit);
    }
}

export class VitB2 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B2", value, unit);
    }
}
export class VitB3 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("B3", value, unit);
    }
}
export class VitB4 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("B4", value, unit);
    }
}
export class VitB5 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B5", value, unit);
    }
}
export class VitB6 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B6", value, unit);
    }
}

export class VitB9 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B9", value, unit);
    }
}

export class VitB12 extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("B12", value, unit);
    }
}

export class VitC extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("C", value, unit);
    }
}

export class VitD extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("D", value, unit);
    }
}

export class VitE extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mg) {
        super("E", value, unit);
    }
}

export class VitK extends Vitamin {
    constructor(value: number, unit:unitsEnum = unitsEnum.mkg) {
        super("K", value, unit);
    }
}
