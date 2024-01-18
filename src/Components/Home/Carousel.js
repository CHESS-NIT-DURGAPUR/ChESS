import React from "react";
import "../main.css";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";
import Main1 from "../assets/main.jpg";
import Main5 from "../assets/main5.jpg";
import Main6 from '../assets/immm1.jpeg'
import Main7 from '../assets/immm258d89b64-5696-47c7-9de7-15b0fe87beb7.jpeg'
import Image from '../assets/immm4.jpeg'

function CarouselItem() {
  return (
    <div>
      {" "}
      <div className="max_height">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main1}
              alt="One"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Faculty", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main6}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Members", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main7}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Office Bearers", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Image}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Alumni", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block custom_height"
              src={Main5}
              alt="Two"
            />
            <Carousel.Caption>
              <TypeAnimation
                cursor={true}
                sequence={["Faculty", 3000, ""]}
                wrapper="h2"
                repeat={Infinity}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselItem;
