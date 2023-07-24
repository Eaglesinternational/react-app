import React from 'react';
import {Link} from 'react-router-dom';
import slider from '../images/emma.jpg'
import slider1 from '../images/madam.jpg'
import slider2 from '../images/dance.jpg'
import slider3 from '../images/fawaz.jpg'
import slider4 from '../images/cross.jpg'
import slider5 from '../images/primaella.jpg'
import slider6 from '../images/student.jpg'
import slider7 from '../images/stud.jpg'

export default function Slider() {
  return (
    <div className='slide container'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider} className="d-block w-100"  height="400px" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider1} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider4} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider5} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider6} className="d-block w-100" alt="..." height="450px" />
    </div>
    <div className="carousel-item">
      <img src={slider7} className="d-block w-100" alt="..." height="450px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
