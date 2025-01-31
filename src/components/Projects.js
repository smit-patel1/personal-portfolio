import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/password_str_project.png";
import flaskIcon from "../assets/img/flask-icon.png";

export const Projects = () => {
  const projects = [
    {
      title: "Password Strength Checker",
      description:
        "A full-stack project using React and Flask. Integrated machine learning models (Keras, TensorFlow) to classify passwords based on length, character variety, and structural complexity.",
      imgUrl: projImg1,
      techStack: [
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Flask",
          icon: flaskIcon, 
        },
        {
          name: "Keras",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        },
        {
          name: "TensorFlow",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        },
        {
          name: "Python",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
      ],
      liveDemo: "#",
      githubRepo: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Here’s one of the projects I’ve worked on, showcasing my skills
                in full-stack development and implementing machine learning
                models.
              </p>
              <div className="project-row">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="proj-imgbx">
                      <img src={project.imgUrl} alt={project.title} />
                    </div>
                    <div className="proj-description">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="tech-stack">
                        {project.techStack.map((tech, idx) => (
                          <div key={idx} className="tech-icon">
                            <img
                              src={tech.icon}
                              alt={`${tech.name} icon`}
                              className="tech-icon-img"
                            />
                            {tech.name}
                          </div>
                        ))}
                      </div>
                      <div className="proj-links">
                        <a href={project.liveDemo} className="live-demo">
                          Live Demo
                        </a>
                        <a href={project.githubRepo} className="github-repo">
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
