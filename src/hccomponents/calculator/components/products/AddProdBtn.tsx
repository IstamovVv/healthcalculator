import React, {FC, useContext} from 'react';
import HCContext from "../../hccontext";

import "./add-product.css";

const AddProdBtn : FC = () => {
    const {toggleModal} = useContext(HCContext);

    return (
        <button
            className="prod-item add-prod-btn"
            onClick={() => {
                if (toggleModal)
                    toggleModal(true)
            }}
        />
    );
};

export default AddProdBtn;