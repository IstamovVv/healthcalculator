import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Navbar from "./hccomponents/site/navbar/Navbar";
import Home from "./hccomponents/site/home/Home";
import Calculator from "./hccomponents/calculator/Calculator";
import About from "./hccomponents/site/about/About";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Home/>
            <Calculator/>
            <About/>
        </BrowserRouter>
    );
};

export default App;