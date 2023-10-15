import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UpcommingEvents.css'; // Custom CSS

import Image1 from '../assets/img/meet1.jpg';
import Image2 from '../assets/img/meet.jpg';
import Image3 from '../assets/img/meet2.jpeg';
import Image4 from '../assets/img/meet3.jpeg';
import Image5 from '../assets/img/meet4.jpeg';

const UpcommingEvents = () => {
  return (
    <>
    <h1 className="hehe">Glimpses of Meetings</h1>
    <div className="carousel-container">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Image1}
              className="d-block w-100 rounded"
              alt="Image 1"
            />
            <div className="carousel-caption">
              <h5>Eloquentia</h5>
              <p>The Executive Committee of SSIPMT Spellbinders Jan-June'23 poses at Eloquentia</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image2}
              className="d-block w-100 rounded"
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h5>Lights, Camera, Action</h5>
              <p>Members of SSIPMT Spellbinders visited the Rungta Toastmasters Club for a joint meeting</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image3}
              className="d-block w-100 rounded"
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h5>Meeting 143</h5>
              <p>Members of SSIPMT Spellbinders celebrate their 143rd meeting themed Love</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image4}
              className="d-block w-100 rounded"
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h5>Jubilance Day 1</h5>
              <p>SSIPMT Spellbinders along with Division N members at Hyderabad</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image5}
              className="d-block w-100 rounded"
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h5>Jubilance Day 2</h5>
              <p>SSIPMT Spellbinders along with Division N members at Hyderabad at Second Day of Jubilance</p>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
        
        {/* Navigation Buttons */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
    </>
  );
};

export { UpcommingEvents };
