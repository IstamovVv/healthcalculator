import React, {FC} from 'react';

import {getDailyRatio} from "../../../../data/nutrients/DailyRateNutrients";
import {unitsEnum} from "../../../../data/nutrients/UnitsEnum";

interface INutrientsItemProps {
    type: string,
    name: string,
    value: number,
    unit: unitsEnum
}

const NutrientsItem : FC<INutrientsItemProps> = ({type, name, value, unit}) => {
    function getRounded(value: number, accuracy: number): number {
        return Math.floor(value * accuracy) / accuracy;
    }

    return (
        <li className="nutrients-item">
            <div className="nutrient-item-wrapper">
                <div className="nutrient-item-wrapper__data">
                    {name} - {getRounded(value, 100)} {unit}
                </div>
                <div className="nutrient-item-wrapper_percentage">
                    {getRounded(getDailyRatio(type, name, value, unit) * 100, 100)} %
                </div>
            </div>
        </li>
    );
};

export default NutrientsItem;