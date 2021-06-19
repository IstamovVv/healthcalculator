import {unitsEnum} from "./UnitsEnum";

type MineralsObject = {
    [index: string]: number,
    Calcium: number,
    Iron: number,
    Magnesium: number,
    Phosphorus: number,
    Potassium: number,
    Sodium: number,
    Zinc: number,
    Copper: number,
    Manganese: number,
    Selenium: number,
    Fluorine: number,
}

type VitaminsObject = {
    [index: string]: number,
    A: number,
    B1: number,
    B2: number,
    B3: number,
    B4: number,
    B5: number,
    B6: number,
    B9: number,
    B12: number,
    C: number,
    D: number,
    D2: number,
    D3: number,
    E: number,
    K: number,
}

type NutrientsObject = {
    [index: string]: MineralsObject | VitaminsObject,
    minerals: MineralsObject,
    vitamins: VitaminsObject
}

export const DailyRateNutrients: NutrientsObject = {
    minerals: {
        Calcium: 1000000,
        Iron: 10000,
        Magnesium: 400000,
        Phosphorus: 700000,
        Potassium: 4700000,
        Sodium: 1300000,
        Zinc: 11000,
        Copper: 900,
        Manganese: 2300,
        Selenium: 55000,
        Fluorine: 4000000,
    },

    vitamins: {
        A: 900,
        B1: 1200,
        B2: 1300,
        B3: 16000,
        B4: 500000,
        B5: 5000,
        B6: 1300,
        B9: 400,
        B12: 2.4,
        C: 90000,
        D: 15,
        D2: 7.5,
        D3: 16.25,
        E: 14600,
        K: 120,
    },
};

function getRounded(value: number, accuracy: number): number {
    return Math.floor(value * accuracy) / accuracy;
}

export function getDailyRatio(type: string, name: string, value: number, unit: unitsEnum): number {
    if (unit === unitsEnum.mg) value *= 1000;

    if (!DailyRateNutrients.hasOwnProperty(type))
        throw new TypeError("type is invalid");

    if (!DailyRateNutrients[type].hasOwnProperty(name))
        throw new TypeError("name is invalid");

    let dailyIntake: number = DailyRateNutrients[type][name];

    return getRounded(value / dailyIntake, 1000);
}