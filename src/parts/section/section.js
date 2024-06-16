import "./section.css";
import myPhoto from "../../my-photo/my-photo.jpg";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import computer from "../../images/computer-84.jpg";


function Section() {
    return (
        <section>
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
                                I was born in <span className="orange">21/08/2003</span> and I am from Uzbekistan. My native language is 'Uzbek', but I learned 'English' I am
                                interested in 'Coding', so I like finding out problems that exist in the Module. I feel
                                myself as <span className="orange">expert programmer</span> when I find solution for the problem in the module. I love working on myself and I can not live without it.
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
            <div className="bg-my-few-dark ability-part" id="experience">
                <p className="section-heading">
                    My <span className="orange">Experience</span>
                </p>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="border border-light my-4 py-3">
                                <h4 className="text-light text-center">
                                    I have an <span className="orange">'Experience'</span>
                                </h4>
                            </div>
                            <table className="table table-bordered border-light text-light">
                                <thead>
                                <tr>
                                    <th className="text-center">№</th>
                                    <th>Knowledges</th>
                                    <th className="text-center">Experience</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>Html</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center text-center">2</td>
                                    <td>Css</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td>Java-script</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">4</td>
                                    <td>Bootstrap</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td>React-js</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">6</td>
                                    <td>Redux</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">7</td>
                                    <td>Type-Script</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">8</td>
                                    <td>Other libraries...</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12">
                            <div className="mx-auto border border-light my-4 py-3 px-5">
                                <h4 className="text-light text-center">
                                    My <span className="orange">'Services'</span>
                                </h4>
                            </div>
                            <table className="table table-bordered border-light text-light">
                                <thead>
                                <tr>
                                    <th className="text-center">№</th>
                                    <th>Service</th>
                                    <th className="text-center">Experience</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>Producing front-end part of web-applications</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td>Design</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td>Responsive-Page</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">4</td>
                                    <td>Optimize-Code</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td>Clean-Code</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">6</td>
                                    <td>Fast Page</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">7</td>
                                    <td>API-Integration</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">8</td>
                                    <td>Fetch and Axios</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">9</td>
                                    <td>Json-Server</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">10</td>
                                    <td>Authorization</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">11</td>
                                    <td>Login</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">12</td>
                                    <td>Private-Page</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">13</td>
                                    <td>Responsible for work</td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                <tr>
                                    <td className="text-center">14</td>
                                    <td>the most important thing is <span className="orange">'Politeness'</span></td>
                                    <td className="text-success text-center">Yes <i
                                        className="bi bi-check-circle-fill"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12">
                            <div className="border border-light my-4 py-3">
                                <h4 className="text-light text-center">
                                    <span className="orange">'Programs'</span> I use
                                </h4>
                            </div>

                            <div className="borde border-ligh my-4 py-3 container-fluid px-4">
                                <div className="row">
                                    <div className="col-3 my-3">
                                        <img src={img1} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img2} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img3} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img4} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img5} alt="" className="w-100 bg-light rounded-circle p-1"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img6} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img7} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-3 my-3">
                                        <img src={img8} alt="" className="w-100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section;