import React, {FC} from 'react';
import Product from "../../../../data/Product";

interface IModalProdItemProps {
    product: Product,
    selectProd: Function
}

const ModalProdItem: FC<IModalProdItemProps> = ({product, selectProd}) => {
    return (
        <button
            className="prod-item prod-modal__prod-item"
            onClick={() => selectProd(product)}
        >
            <p>{product.name}</p>
        </button>
    );
};

export default ModalProdItem;