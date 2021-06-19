import React from 'react';
import "./home.css";

import calcImg from "../../../images/calculator.png";

const Home = () => {
    return (
        <section id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <div>
                            <h1 className="home__header">Health Calculator</h1>
                            <p className="home__text">
                                Пора посчитать,
                                <br />
                                насколько полноценный
                                <br />
                                ваш рацион питания!
                            </p>
                        </div>
                    </div>
                    <div className="col-7 d-flex align-items-center justify-content-center">
                        <div>
                            <img className="calc_image" src={calcImg} alt="calculator" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;