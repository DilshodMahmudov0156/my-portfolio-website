import {useState} from 'react';
import './nav.css';
function Nav() {
    const [ulShow, setUlShow] = useState(false);

    const showUl = () => {
        setUlShow(oldVal => !oldVal);
    }
    return (
        <nav>
            <div className="container">
                <div className="row justify-content-between align-items-center nav-row">
                    <div className="logo">
                        Dilshod<span>.</span>
                    </div>
                    <ul className={`my-ul ${ulShow ? "active" : null}`}>
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#experience">Experience</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                        <button className="hire-btn">
                            Hire me
                        </button>
                    </ul>
                    <lu className="menu-ul">
                        <a href="#contact">
                            <button className="hire-btn">
                                Hire me
                            </button>
                        </a>
                        <button className={`gamburger-btn ${ulShow ? "active" : null}`} onClick={showUl}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </button>
                    </lu>
                </div>
            </div>
        </nav>
    );
}

export default Nav;