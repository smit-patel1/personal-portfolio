import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaCode, FaTools, FaFlask, FaBug } from "react-icons/fa"; 

export const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                containerClass="carousel-container"
              >
                <div className="item">
                  <h4><FaFlask /> Frameworks & Libraries</h4>
                  <p>React, Flask, Keras, TensorFlow, Pandas, NumPy</p>
                </div>
                <div className="item">
                  <h4><FaCode /> Programming Languages</h4>
                  <p>Java, Python, C, SQL, JavaScript, HTML/CSS</p>
                </div>
                <div className="item">
                  <h4><FaTools /> Developer Tools</h4>
                  <p>Git, Docker, VS Code, PyCharm, IntelliJ</p>
                </div>
                <div className="item">
                  <h4><FaBug /> Testing</h4>
                  <p>JUnit, scikit-learn, Joblib</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
