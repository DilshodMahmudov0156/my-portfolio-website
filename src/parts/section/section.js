import "./section.css";
import AboutMe from "../../components/for-section/about-me";
import MyService from "../../components/for-section/my-service";


function Section() {
    return (
        <section>
            <AboutMe/>
            <MyService/>
        </section>
    );
}

export default Section;