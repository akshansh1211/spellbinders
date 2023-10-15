import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photo1 from '../assets/img/ex1.png';
import photo2 from '../assets/img/ex2.png';
import photo3 from '../assets/img/ex3.png';
import photo4 from '../assets/img/ex4.png';
import photo5 from '../assets/img/ex5.jpeg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

const h2Style = {
  textAlign: 'center', // 'center' should be a string
  fontWeight: 700,     // This is fine
  fontSize: '45px',    // '45px' should be enclosed in quotes
};
 

const pStyle = {
  color: '#B8B8B8', // Color value enclosed in quotes
  fontSize: '18px',  // Property names written in camelCase
  letterSpacing: '0.8px',
  lineHeight: '1.5em',
  margin: '14px auto 30px auto',
  textAlign: 'center',
  width: '80%',
};

const imgStyle = {
  // margin: '15px', // Add a little space around the images
  borderRadius: '20px', // Add a slight border radius
 
    width: '93%',    // Adjust the width percentage as per your preference
    margin: '10px',  // Add a margin to create space between images
  
};

export const PhotoGallery = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="photo-gallery" id="photo-gallery">
      <img className="background-image-right" src={colorSharp2} alt="Image" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="photo-gallery-bx wow zoomIn">
              <h2 style={h2Style}>Executive Committees</h2>
              <p style={pStyle}>The Executive Committee is a group of elected club officers responsible for the day-to-day operations and leadership of a Toastmasters club.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme photo-gallery-slider">
                <div className="item">
                  <img src={photo1} alt="Photo" style={imgStyle} />
                </div>
                <div className="item">
                  <img src={photo2} alt="Photo" style={imgStyle} />
                </div>
                <div className="item">
                  <img src={photo3} alt="Photo" style={imgStyle} />
                </div>
                <div className="item">
                  <img src={photo4} alt="Photo" style={imgStyle} />
                </div>
                <div className="item">
                  <img src={photo5} alt="Photo" style={imgStyle} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
