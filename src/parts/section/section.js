import "./section.css";
import AboutMe from "./about-me";
import MyService from "./my-service";
import Projects from "./projects";


function Section() {
    return (
        <section>
            <AboutMe/>
            <MyService/>
            <Projects/>
        </section>
    );
}

export default Section;