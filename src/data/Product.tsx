/* Every product should be inherited from this */
/* The "name" field speaks for itself. For example - tomato */
/* Type, what is not surprisingly, means the type of the product. For example - fruit */
/* In the field of nutrients, you can add elements according to the following convention: */
/* Firstly, you have to indicate the name of the nutrient with a small letter */
/* As a value, you have to specify the milligrams of a substance (float) or another conventional designation (string) */
/* For example:
this.nutrients = {
    calcium: 12.2,
    magnesium: 15,1
} */
/* Denote the vitamins names with a capital letter: B12, A, C...*/
/* Weight factor is the number of servings of 100 grams */

import Nutrient from "./nutrients/Nutrient";

export default class Product {
    constructor(name : string, type : string = 'Product') {
        this.name = name;
        this.type = type;
    }

    public name: string;
    public type: string;

    public weightFactor: number = 0;
    public nutrients: Nutrient[] = [];
}

export class Fruit extends Product {
    constructor(name: string) {
        super(name, "Fruit");
    }
}

export class Vegetable extends Product {
    constructor(name: string) {
        super(name, "Vegetable");
    }
}