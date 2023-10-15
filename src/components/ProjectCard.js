import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, registrationUrl }) => {
  return (
    <a href={registrationUrl} target="_blank">
      <Row>
      <Col style={{ width: '50%', margin: '0 auto' }}>
  <div className="text-center">
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title}
      style={{ width: "30%", height: "auto", maxWidth: "100%" }}
       />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </div>
</Col>

      </Row>
    </a>
  );
}
