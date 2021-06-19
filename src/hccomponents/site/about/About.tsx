import React, {FC} from 'react';
import "./about.css";

const About : FC = () => {
    return (
        <section id="about">
            <div className="about-wrapper">
                <div className="container">
                    <h2 className="about__title">В разработке</h2>
                    <p className="about__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                        blanditiis cum delectus dolorum enim et eum excepturi explicabo
                        itaque iusto magnam minus, officiis placeat recusandae sint tenetur
                        ut vero vitae.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;