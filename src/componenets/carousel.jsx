import {Carousel} from "react-bootstrap";
import "../sass/app.scss";
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const tempCarauselUrl = 'https://equbwebsiteassets.s3.amazonaws.com/money-605075.jpg';


const tempalt="hj";


export default  function Slides() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
      <LazyLoadImage
    className="d-block w-100"
    alt={tempalt}
    effect="blur"
    placeholderSrc={tempCarauselUrl}
    src={tempCarauselUrl} />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <LazyLoadImage
    className="d-block w-100"
    alt={tempalt}
    effect="blur"
    placeholderSrc={tempCarauselUrl}
    src={tempCarauselUrl} />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <LazyLoadImage
    className="d-block w-100"
    alt={tempalt}
    effect="blur"
    placeholderSrc={tempCarauselUrl}
    src={tempCarauselUrl} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

