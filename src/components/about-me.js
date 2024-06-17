import React from 'react';
import myPhoto from "../my-photo/my-photo.jpg";

function AboutMe() {
    return (
        <div className="bg-my-dark about-me-part" id="about">
            <div className="container">
                <p className="section-heading">
                    About <span className="orange">Me</span>
                </p>
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <img src={myPhoto} alt="" className="w-100 my-photo"/>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <p className="my-heading">Front-End Developer</p>
                        <p className="my-information">
                            I was born in <span className="orange">21/08/2003</span> and I am from Uzbekistan. My native
                            language is 'Uzbek', but I learned 'English' I am
                            interested in 'Coding', so I like finding out problems that exist in the Module. I feel
                            myself as <span className="orange">expert programmer</span> when I find solution for the
                            problem in the module. I love working on myself and I can not live without it.
                        </p>
                        <a href="#contact" className="contact-btn-out">
                            <button className="contact-btn">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;