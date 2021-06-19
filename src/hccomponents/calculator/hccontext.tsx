import React from "react";

export type HCContextProps = {
    removeProd: Function,
    toggleModal: Function,
    isOpen: boolean
}


const HCContext = React.createContext<Partial<HCContextProps>>({});

export default HCContext;

