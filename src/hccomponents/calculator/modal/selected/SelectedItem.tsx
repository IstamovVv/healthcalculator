import React, {FC} from 'react';
import WeightCounter from "./WeightCounter";
import {ISelectedItemType} from "../Modal";

interface ISelectedItemProps {
    selectedItem: ISelectedItemType,
    unselectProd: Function
}

const SelectedItem: FC<ISelectedItemProps> = ({selectedItem, unselectProd}) => {
    return (
        <li className="selected-item">
            <strong>{selectedItem.product.name}</strong>
            <WeightCounter selectedItem={selectedItem} />
            <button
                className="unselect-button"
                onClick={() => unselectProd(selectedItem.product)}
            />
        </li>
    );
};

export default SelectedItem;