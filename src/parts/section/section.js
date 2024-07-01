import "./section.css";
import AboutMe from "./about-me/about-me";
import MyService from "./my-service/my-service";
import Projects from "./projects/projects";


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