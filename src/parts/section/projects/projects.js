import React from 'react';
import "./projects.css";
import responsivePage from "../../../images/responsive.png";
import slider from "../../../images/slider.png";
import tab from "../../../images/tab.png";

function Projects() {
    return (
        <div className="projects bg-my-dark py-5" id="projects">
            <p className="section-heading">
                My <span className="orange">Projects</span>
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <div className="project-img-container">
                                <img src={responsivePage} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://vocal-jelly-b7ad97.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">Responsive-Page</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-html5"></i>
                                    </button>
                                    <button className="card-icon">
                                        <i className="fa-brands fa-css3-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <div className="project-img-container">
                                <img src={slider} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://stupendous-phoenix-2b0966.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">Slider</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-html5"></i>
                                    </button>
                                    <button className="card-icon">
                                        <i className="fa-brands fa-css3-alt"></i>
                                    </button>
                                    <button className="card-icon">
                                        <i className="fa-brands fa-square-js"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                    <div className="project-card">
                            <div className="project-img-container">
                                <img src={tab} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://silver-starburst-99a10b.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">Tab-Content</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-html5"></i>
                                    </button>
                                    <button className="card-icon">
                                        <i className="fa-brands fa-css3-alt"></i>
                                    </button>
                                    <button className="card-icon">
                                        <i className="fa-brands fa-square-js"></i>
                                    </button>
                                </div>
                            </div>
                    </div>
                    </div>

                </div>
                <button className="knowledge-btn d-block mx-auto mt-5">
                        More <i className="bi bi-box-arrow-in-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Projects;