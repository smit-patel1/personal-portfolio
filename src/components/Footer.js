import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolio_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn Icon
import navIcon2 from "../assets/img/github-icon.png"; // GitHub Icon
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram Icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/smit-patel120/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/smit-patel1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a
                href="https://www.instagram.com/smit_p180/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
