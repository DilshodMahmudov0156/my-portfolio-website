import "./section.css";
import myPhoto from "../../my-photo/my-photo.jpg"

function Section() {
    return (
        <section>
            <div className="bg-my-dark">
                <div className="container py-5">
                    <p className="section-heading">
                        About <span className="orange">Me</span>
                    </p>
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <img src={myPhoto} alt="" className="w-100 my-photo"/>
                        </div>
                        <div className="col-md-8 col-lg-7">
                            <p className="my-heading">Front-End Developer</p>
                            <p className="my-information">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquid dolorum error hic impedit incidunt minus quam quia! Ab, alias animi aperiam
                                aspernatur culpa dignissimos dolore doloribus eaque earum facere laborum magnam maiores
                                odio omnis praesentium quam quas quod repellendus similique sit tenetur veritatis vero
                                vitae. Ab cupiditate laborum sed!
                            </p>
                            <p className="my-information">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda autem
                                consequuntur, dolore dolorem doloribus esse excepturi magni, natus non, officiis
                                recusandae reiciendis repellat unde.
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
        </section>
    );
}

export default Section;