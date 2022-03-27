import React, {useState} from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col, Carousel } from "react-bootstrap";
import Capture from '../images/Capture.JPG'
import Capture2 from '../images/Capture2.JPG'
import Capture3 from '../images/Capture3.JPG'
import Capture4 from '../images/Capture4.JPG'


export function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src={Capture}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src={Capture3}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src={Capture4}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }