import React from 'react';
import "./projects.css";
import responsivePage from "../../images/responsive page.png";

function Projects() {
    return (
        <div className="projects bg-my-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-card">
                            <img src={responsivePage} alt="" className="w-100"/>
                            <div className="project-window">
                                <div className="links">
                                    <a href="" target="_blank">
                                        <span className="window-icon">
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </span>
                                        Open
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;