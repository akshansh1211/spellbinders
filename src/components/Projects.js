import { Container, Row, Col, Tab, Nav, Image } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "150th gathering",
      description: "Milestone Meeting",
      imgUrl: projImg1,
    },
    {
      title: "Eloquentia",
      description: "Membership Drive",
      imgUrl: projImg2,
    },
    {
      title: "Loudspeaker 3.0",
      description: "Public Relations Campaign",
      imgUrl: projImg3,
    }
  ];

  const projectTabs = projects.map((project, index) => (
    <Tab.Pane eventKey={project.title} key={index}>
      <Row className="d-flex justify-content-center">
        <Col>
          <ProjectCard {...project} />
        </Col>
      </Row>
    </Tab.Pane>
  ));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Past-events</h2>
                <p>SSIPMT Spellbinders organize a range of educational sessions, membership promotion activities, and public relations campaigns.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey={projects[0].title}>
                  <Nav variant="pills" className="nav-pills mb-5 " id="pills-tab">
                    {projects.map((project, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={project.title}>{project.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {projectTabs}
                    <Tab.Pane eventKey="section">
                      <p>Discover our journey through a series of successful coding challenges, workshops, and innovative projects that have fueled our passion for technology.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
