import React from 'react';
import headerImg from "../../images/header-img.png";
import "./header.css";
import {Typewriter} from "react-simple-typewriter";
import myCV from "../../my-cv/Dilshod Mahmudov cv.pdf";

function Header() {
    return (
        <header id="home">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-md-left text-center">
                        <p className="header-text-1 orange">Hi! It's me</p>
                        <p className="header-text-2">Dilshod Mahmudov</p>
                        <p className="header-text-1">
                            And I am a
                            <span className="orange">
                                <Typewriter
                                    words={[" React-Js developer"," Front-End developer"]}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={120}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                        <p className="header-paragraph">
                            I have been in <span className="orange">Programming</span> for two years!<br/>
                            And I love my job!
                        </p>
                        <div className="my-contact justify-content-md-start justify-content-center">
                            <a href="https://github.com/DilshodMahmudov0156" target="_blank">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href={myCV} target="_blank">
                                CV
                                {/*<i className="bi bi-linkedin"></i>*/}
                            </a>
                            <a href="tel:+998915650156">
                                <i className="bi bi-telephone-fill"></i>
                            </a>
                            <a href="https://t.me/dilshodmahmudov" target="_blank">
                                <i className="bi bi-telegram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-9">
                        <img src={headerImg} alt="" className="w-100"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;