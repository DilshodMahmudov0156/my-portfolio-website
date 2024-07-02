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
            <div className="bg-my-few-dark py-1"></div>
        </section>
    );
}

export default Section;