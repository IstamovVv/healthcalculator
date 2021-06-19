import React, {useContext, FC} from 'react';
import {Products} from "../../../data/Products";
import Product from "../../../data/Product";

import HCContext from "../hccontext";

import ModalProdList from "./products/ModalProdList";
import SelectedList from "./selected/SelectedList";

import "./modal.css";

export interface ISelectedItemType {
    product: Product,
    newWeight: number
}

interface ModalProps {
    addProduct: Function
}

const Modal: FC<ModalProps> = ({addProduct}) => {
    const {isOpen, toggleModal} = useContext(HCContext);

    const [products] = React.useState<Product[]>(Products.fruits);

    // selected - an array of elements of the form:
    // { name: productName, newWeight: weight }
    // it was made because objects are passing by reference
    // and we shouldn't modify the products
    // we modifying the newWeight property
    // and adding it, if the "add selected" button pressed
    const [selected, setSelected] = React.useState<ISelectedItemType[]>([]);

    function selectProd(product: Product): void {
        let check: boolean = true;

        selected.forEach((element: ISelectedItemType) => {
            if (element.product.name === product.name) check = false;
        })

        if (check) setSelected(selected.concat([{product, newWeight: 1}]));
    }

    function unselectProd(product: Product): void {
        setSelected(selected.filter((element: ISelectedItemType) => {
            return element.product.name !== product.name;
        }))
    }

    return (
        <React.Fragment>
            {isOpen && (
                <div className="prod-modal">
                    <div className="prod-modal__body">
                        <h2 className="prod-modal__header">Меню добавления продукта</h2>
                        <div className="prod-modal__data">
                            <ModalProdList products={products} selectProd={selectProd} />
                            <div className="prod-modal__basket">
                                <h3 className="selected-header">Выбранные продукты</h3>
                                <SelectedList selected={selected} unselectProd={unselectProd} />
                                <div className="close-modal-wrapper">
                                    <button
                                        className="close-modal-button"
                                        onClick={() => {
                                            addProduct(...selected);
                                            setSelected([]);
                                            if (toggleModal)
                                                toggleModal();
                                        }}
                                    >
                                        {selected.length ? "Add selected" : "Close"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Modal;