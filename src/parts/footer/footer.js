import React from 'react';
import myCV from "../../my-cv/Dilshod Mahmudov cv.pdf";
import "./footer.css";

function Footer() {
    return (
        <footer className="bg-my-dark" id="hire-me">
                <h2 className="section-heading">
                    Find <span className="orange">Me</span>
                </h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 project-card p-4">
                            <div>
                                <div className="d-flex mt-3 align-items-center">
                                    <a href="https://github.com/DilshodMahmudov0156" target="_blank"
                                       className="footer-a">
                                        <i className="bi bi-github"></i>
                                    </a>
                                    <a href="https://github.com/DilshodMahmudov0156"
                                       className="footer-link" target="_blank">github.com</a>
                                </div>

                                <div className="d-flex mt-3 align-items-center">
                                    <a href={myCV} target="_blank"
                                       className="footer-a">
                                        CV
                                    </a>
                                    <a href={myCV} target="_blank" className="footer-link" target="_blank">Download
                                        my-CV</a>
                                </div>

                                <div className="d-flex mt-3 align-items-center">
                                    <a href="https://t.me/dilshodmahmudov" target="_blank"
                                       className="footer-a">
                                        <i className="bi bi-telegram"></i>
                                    </a>
                                    <a href="https://t.me/dilshodmahmudov"
                                       className="footer-link" target="_blank">Telegram</a>
                                </div>

                                <div className="d-flex mt-3 align-items-center">
                                    <a href="tel:+998915650156"
                                       className="footer-a">
                                        <i className="bi bi-telephone-fill"></i>
                                    </a>
                                    <a href="tel:+998915650156" className="footer-link">+998 91 565 01
                                        56</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;