import React, {FC} from 'react';
import ModalProdItem from "./ModalProdItem";

import Product from "../../../../data/Product";

interface IModalProdListProps {
    products: Array<Product>,
    selectProd: Function
}

const ModalProdList: FC<IModalProdListProps> = ({products, selectProd}) => {
    return (
        <div className="prod-items prod-modal__items">
            {products.map((product, idx) => {
                return (
                    <ModalProdItem product={product} selectProd={selectProd} key={idx} />
                );
            })}
        </div>
    );
};

export default ModalProdList;