import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from ".src\components\imgcarousel\i1.jpg";
import ExampleCarouselImage2 from ".src/components/imgcarousel/2.png";
import ExampleCarouselImage3 from ".src/components/imgcarousel/3.jpg";

import "./carrucel.css";

export const Carrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={ExampleCarouselImage1}></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage2 text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage3 text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
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