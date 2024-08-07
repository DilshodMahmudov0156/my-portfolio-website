import React from 'react';
import "./projects.css";
import contactRedux from "../../../images/contact-redux.png";
import ecommerce from "../../../images/ecommerce.png";
import toDoList from "../../../images/to-do-list.png";

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
                                <img src={contactRedux} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://voluble-starburst-1332db.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">Contact App</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-react"></i>
                                    </button>
                                    <button class="card-icon">
                                        <i class="fa-solid fa-diagram-project"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="project-card">
                            <div className="project-img-container">
                                <img src={ecommerce} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://tangerine-selkie-4f0c7c.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">Ecommerce</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-react"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                    <div className="project-card">
                            <div className="project-img-container">
                                <img src={toDoList} alt="" className="w-100"/>
                                <div className="project-window">
                                    <div className="links">
                                        <a href="https://vermillion-beignet-819295.netlify.app/" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                            Open
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between card-text">
                                <p className="card-title">To-Do-List</p>
                                <div className="d-flex">
                                    <button className="card-icon">
                                        <i className="fa-brands fa-react"></i>
                                    </button>
                                </div>
                            </div>
                    </div>
                    </div>

                </div>
                <div className="text-center">
                    <a href="https://splendorous-jelly-673122.netlify.app/" target="_blank" className="knowledge-btn more-btn">
                        See More <i className="bi bi-box-arrow-in-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;