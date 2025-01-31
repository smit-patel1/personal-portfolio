import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Row, Col } from "react-bootstrap";
import portfolioImage from "../assets/img/Portfolio_image.png";

export const Banner = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#000" },
    },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00c9ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#92fe9d",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 250, duration: 0.6 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  };

  return (
    <section className="banner" id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="motion-background"
      />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to My Portfolio</span>
              <h1>
                Hi! I'm Smit <br />
                <span className="dynamic-text">
                  Aspiring AI & Software Developer
                </span>
              </h1>
              <p>
                I'm passionate about AI and software development, building
                projects that solve real-world problems while continuously
                learning and enhancing my skills.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="image-container">
              <img
                src={portfolioImage}
                alt="Portfolio"
                className="portfolio-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
