import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  const colStyles = {
    flexShrink: 0,
    width: "100%",
    maxWidth: "100%",
    paddingRight: "calc(var(--bs-gutter-x) * .5)",
    paddingLeft: "calc(var(--bs-gutter-x) * .5)",
    marginTop: "var(--bs-gutter-y)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "px",
    flexDirection: "column",
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col xs={12} sm={6} style={colStyles}>
            {/* <img src={logo} alt="Icon" /> */}
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end" style={colStyles}>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ssipmt-spellbinders-toastmasters-club-6483b021a" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="mailto:ssipmtspellbinderstmclub@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://instagram.com/ssipmtspellbinders?igshid=MmU2YjMzNjRlOQ==" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>SSIPMT Spellbinders, SSIPMT.</p>
            <p>Developed by Akshansh Singh, Shadprakash Yadav, Siddhi Soni.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};