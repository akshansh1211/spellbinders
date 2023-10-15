import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Toastfest = () => {
  return (
    <section className="project project2" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  id="Glimpses"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>ToastFest: Where Words Ignite, Leaders Emerge, and Spontaneity Rules!</h2>
                  {/* <h1>TOAST FEST </h1> */}
                  {/* <img
                    className=""
                    src={Toastfest}
                    alt="Image"
                    style={{ maxWidth: "80%", height: "600px", margin: "10px 0" }}
                  /> */}

                  <p>ToastFest is an eagerly anticipated annual event organized by SSIPMT Spellbinders, the dynamic Toastmasters club of our college. ToastFest is a celebration of communication, leadership, and the spirit of spontaneous expression. This event is a true showcase of the club's dedication to fostering public speaking, leadership skills, and camaraderie among its members.
The activities and games featured in ToastFest are designed to challenge participants in various aspects of communication and leadership, ensuring an enriching and enjoyable experience for all.</p>

                  <button onClick={() => console.log('connect')} style={{ color: "#fff" }}>
                    JOIN Toastfest <ArrowRightCircle size={25} style={{ color: "#fff" }} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}

