import React, {FC} from 'react';

import "./nutrients-accordion.css"

import NutrientsList from "./NutrientsList";
import Product from "../../../../data/Product";
import {unitsEnum} from "../../../../data/nutrients/UnitsEnum";

interface INutrientsAccordionProps {
    products: Product[]
}

type NutrientObject = {
    value: number,
    unit: unitsEnum
}

export type NutrientsObject = {
    [index: string]: NutrientObject
}

const NutrientsAccordion : FC<INutrientsAccordionProps> = ({products}) => {
    function getNutrients(this: any, products: Product[]) {
        let allNutrients : NutrientsObject = {}

        products.forEach(function(product) {
            product.nutrients.forEach((nutrient) => {
                if (allNutrients.hasOwnProperty(nutrient.name)) {
                    allNutrients[nutrient.name].value =
                        allNutrients[nutrient.name].value +
                        nutrient.value * product.weightFactor;
                } else {
                    allNutrients[nutrient.name] = {
                        value: nutrient.value * product.weightFactor,
                        unit: nutrient.unit,
                    };
                }
            });
        }, this);

        return allNutrients;
    }

    return (
        <div className="nutrients">
            <div className="accordion" id="nutrients-accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-macro"
                            aria-expanded="false"
                            aria-controls="collapse-macro"
                        >
                            Минералы
                        </button>
                    </h2>
                    <div
                        id="collapse-macro"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#nutrients-accordion"
                    >
                        <div className="accordion-body">
                            <NutrientsList
                                nutrients={getNutrients(products)}
                                type={"minerals"}
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-vitamins"
                            aria-expanded="false"
                            aria-controls="collapse-vitamins"
                        >
                            Витамины
                        </button>
                    </h2>
                    <div
                        id="collapse-vitamins"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#nutrients-accordion"
                    >
                        <div className="accordion-body">
                            <NutrientsList
                                nutrients={getNutrients(products)}
                                type={"vitamins"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutrientsAccordion;