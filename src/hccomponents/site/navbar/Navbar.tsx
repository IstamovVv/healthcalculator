import React, {FC, useEffect} from 'react';
import "./navbar.css";

const Navbar : FC = () => {
    useEffect(() => {
        window.onscroll = () => {
            let nav = document.querySelector("#calc-navbar");
            if (!nav) return;

            if (window.pageYOffset > 100) {
                nav.classList.add("nav-dark", "shadow");
            } else {
                nav.classList.remove("nav-dark", "shadow");
            }
        };
    });

    return (
        <nav
            id="calc-navbar"
            className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
        >
            <div className="container">
                <h2 className="navbar-brand">Health Calculator</h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#calculator">
                                Calculate
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;