import React from "react";
import NavBar from "./NavBar";
import "./main.css";
import CarouselItem from "./Home/Carousel";
import About from "./Home/About";
import Testimonial from "./Home/Testimonial";
import Opinion from "./Home/Opinion";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <CarouselItem />
      </div>
      <About />
      <Testimonial/>
      <Opinion/>
      <Footer/>
    </>
  );
};

export default Main;
