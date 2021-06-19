import React, {FC} from 'react';
import HCContext from "./hccontext";

import Modal from "./modal/Modal";
import ProdList from "./components/products/ProdList";
import NutrientsAccordion from "./components/nutrients/NutrientsAccordion";

import Product from "../../data/Product";
import {ISelectedItemType} from "./modal/Modal";

import "./calculator.css";

const Calculator : FC = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [isOpen, changeState] = React.useState<boolean>(false);

    function toggleModal(): void {
        changeState(!isOpen);
    }

    function productsIncludes(name: string): boolean {
        return products.some((element: Product) => element.name === name);
    }

    function addProduct(): void {
        let newProducts: Product[] = [];

        for (let i: number = 0; i < arguments.length; ++i) {
            let selectedItem: ISelectedItemType = arguments[i];
            let product: Product = selectedItem.product;

            product.weightFactor += selectedItem.newWeight;
            if (!productsIncludes(product.name)) newProducts.push(product);
        }

        setProducts(products.concat(newProducts));
    }

    function removeProd(product: Product): void {
        product.weightFactor = 0;
        setProducts(products.filter((element: Product) => element.name !== product.name));
    }

    return (
        <HCContext.Provider value={{ removeProd, toggleModal, isOpen }}>
            <Modal addProduct={addProduct} />
            <section id="calculator">
                <div className="calc-wrapper">
                    <ProdList products={products} />
                    <NutrientsAccordion products={products} />
                </div>
            </section>
        </HCContext.Provider>
    );
};

export default Calculator;