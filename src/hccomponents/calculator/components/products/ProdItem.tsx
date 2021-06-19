import React, {FC, useContext} from 'react';
import HCContext from "../../hccontext";

import Product from "../../../../data/Product";

interface IProdItemProps {
    product: Product,
}

const ProdItem : FC<IProdItemProps> = ({product}) => {
    const { removeProd } = useContext(HCContext);

    return (
        <div className="prod-item calculator__prod-item">
            <div className="prod-item__name">{product.name}</div>
            <button
                className="close-item-btn"
                onClick={() => {
                    if (removeProd)
                        removeProd(product)
                }}
            >
                <div className="close-item-btn__inner">
                    <div className="close-item-btn__left"></div>
                    <div className="close-item-btn__right"></div>
                </div>
            </button>
            <div className="prod-item__weight">{product.weightFactor * 100} г</div>
        </div>
    );
};

export default ProdItem;