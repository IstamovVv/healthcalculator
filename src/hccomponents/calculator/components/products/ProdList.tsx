import React, {FC} from 'react';
import ProdItem from "./ProdItem";
import AddProdBtn from "./AddProdBtn";

import Product from "../../../../data/Product";

interface IProdListProps {
    products: Product[]
}

const ProdList : FC<IProdListProps> = ({products}) => {
    return (
        <div className="prod-items calculator__prod-items">
            {products.map((product, index) => {
                return <ProdItem product={product} key={index} />;
            })}
            <AddProdBtn />
        </div>
    );
};

export default ProdList;