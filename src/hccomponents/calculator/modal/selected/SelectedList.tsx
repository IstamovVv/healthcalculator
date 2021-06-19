import React, {FC} from 'react';
import SelectedItem from "./SelectedItem";

import {ISelectedItemType} from "../Modal";

import "./selected-list.css"

interface ISelectedListProps {
    selected: ISelectedItemType[],
    unselectProd: Function
}

const SelectedList: FC<ISelectedListProps> = ({selected, unselectProd}) => {
    return (
        <div className="selected-items">
            <ul>
                {selected.map((selectedItem, index) => {
                    return (
                        <SelectedItem
                            selectedItem={selectedItem}
                            unselectProd={unselectProd}
                            key={index}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default SelectedList;