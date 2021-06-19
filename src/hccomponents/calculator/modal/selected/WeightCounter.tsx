import React, {FC} from 'react';
import {ISelectedItemType} from "../Modal";

interface IWeightCounterProps {
    selectedItem: ISelectedItemType
}

const WeightCounter: FC<IWeightCounterProps> = ({selectedItem}) => {
    const [counter, setCounter] = React.useState<number>(1);

    const updateFactor = (value: number): void => {
        selectedItem.newWeight = value;
    }

    const increaseCounter = (): void => {
        if (counter >= 20) return;
        updateFactor(counter + 1);
        setCounter(counter + 1);
    }

    const decreaseCounter = (): void => {
        if (counter === 1) return;
        updateFactor(counter - 1);
        setCounter(counter - 1);
    }

    return (
        <div className="weight-counter">
            <button
                className="weight-counter__button"
                onClick={() => {
                    decreaseCounter();
                }}
            >
                -
            </button>
            <div className="weight-counter__current">{counter * 100} г</div>
            <button
                className="weight-counter__button"
                onClick={() => {
                    increaseCounter();
                }}
            >
                +
            </button>
        </div>
    );
};

export default WeightCounter;