import React from 'react';
import "./about-me.css";
import myPhoto from "../../../images/my-photo.jpg";
import firebaseIcon from "../../../images/firebase icon.png";
import canvaIcon from "../../../images/canva icon.png";
import vite from "../../../images/vite.svg";

function AboutMe() {
    return (
        <div className="bg-my-dark about-me-part" id="about">
            <div className="container">
                <p className="section-heading">
                    About <span className="orange">Me</span>
                </p>
                <div className="row justify-content-between mt-4">
                    <div className="col-md-4">
                        <div className="my-image">
                            <img src={myPhoto} alt="" className="w-100 my-photo"/>
                            <div className="window"></div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <p className="my-heading text-center border-top border-light text-warning">Front-End Developer</p>
                        <p className="my-information">
                            I was born in <span className="orange">21/08/2003</span> and I am from Uzbekistan. My native
                            language is 'Uzbek', but I learned 'English' and I am
                            interested in 'Coding'. So, I like finding out problems that exist in the Module. I feel
                            myself as <span className="orange">expert programmer</span> when I find solution for the
                            problem in the module. I love working on myself. I can not live without my job. I love making
                            functional projects! <span className="orange">My Goal</span> is being one of
                            <span className="orange"> The Best Coders</span> in the world and
                            I am doing my best to reach
                            <span className="orange"> My Goal</span>
                        </p>
                        <div className="border-top border-light"></div>
                        <h3 className="text-center my-4 text-warning">
                            My Knowledges
                        </h3>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-html"></i> Html
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-css"></i> Css
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-bootstrap"></i> Bootstrap
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-js"></i> Java-Script
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-globe"></i> Rest API
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-json"></i> JSON
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-terminal"></i> npm
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-box-fill"></i> webpack
                            </button>
                            <button className="knowledge-btn">
                                <img src={vite} alt="" className="vite-icon"/> Vite js
                            </button>
                            <button className="knowledge-btn">
                                Babel js
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-hdd-network"></i> Json-Server
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-jsx"></i> React-Js
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-diagram-3"></i> Redux
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-filetype-tsx"></i> Type-Script
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-git"></i> Git
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-github"></i> GitHub
                            </button>
                            <button className="knowledge-btn">
                                <img src={firebaseIcon} alt="" className="my-icon"/> Firebase
                            </button>
                            <button className="knowledge-btn">
                                <i className="bi bi-globe"></i> Netlify App
                            </button>
                            <button className="knowledge-btn">
                                <img src={canvaIcon} alt="" className="my-canva-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;