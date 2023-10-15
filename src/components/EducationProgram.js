import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const EducationProgram = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        {/* <img className="background-image-right" src={colorSharp2}/> */}

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education Program</h2>
                        <p>Toastmasters' education program offers a structured and supportive platform for improving public speaking and leadership skills through a series of well-defined projects and evaluations.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> 
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Dynamic Leadership</h5>
                                <p>Level 4 completed</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Innovative Planning</h5>
                                <p>Level 2 completed</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Leadership Development</h5>
                                <p>Level 3 completed</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Strategic Relationship</h5>
                                <p>Level 4 completed</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}