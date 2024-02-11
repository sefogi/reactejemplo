import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from "./imgcarousel/i1.jpg";
import ExampleCarouselImage2 from "./imgcarousel/2.png";
import ExampleCarouselImage3 from "./imgcarousel/3.jpg"

import "./carrucel.css";

export const Carrusel = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className='img' src={ExampleCarouselImage1}></img>
          <Carousel.Caption>
            <h3>Primera Gallery de Daniela</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='img1' src={ExampleCarouselImage2}></img>
          <Carousel.Caption>
            <h3>No está nada mal Bootstrap</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='img' src={ExampleCarouselImage3}></img>
          <Carousel.Caption>
            <h3>Enseñenme otras formas por fa</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel