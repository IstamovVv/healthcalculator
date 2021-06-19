import React, {FC} from 'react';
import NutrientsItem from "./NutrientsItem";
import {DailyRateNutrients} from "../../../../data/nutrients/DailyRateNutrients";

import {NutrientsObject} from "./NutrientsAccordion";
import {unitsEnum} from "../../../../data/nutrients/UnitsEnum";

interface INutrientsListProps {
    nutrients: NutrientsObject,
    type: string
}

const NutrientsList : FC<INutrientsListProps> = ({nutrients, type}) => {
    function getNutrientsItemsArray(nutrients: NutrientsObject, type: string): JSX.Element[] {
        if (!DailyRateNutrients.hasOwnProperty(type)) return [];
        let array: JSX.Element[] = [];

        Object.keys(DailyRateNutrients[type]).forEach((nutrientName, index) => {
            let value: number;
            let unit: unitsEnum;

            if (nutrients.hasOwnProperty(nutrientName)) {
                value = nutrients[nutrientName].value;
                unit = nutrients[nutrientName].unit;
            } else {
                value = 0;
                unit = unitsEnum.mg;
            }

            array.push(
                <NutrientsItem
                    type={type}
                    name={nutrientName}
                    value={value}
                    unit={unit}
                    key={index}
                />
            );
        });

        return array;
    }

    return (
        <div className="nutrients-list">
            <ul>{getNutrientsItemsArray(nutrients, type)}</ul>
        </div>
    );
};

export default NutrientsList;