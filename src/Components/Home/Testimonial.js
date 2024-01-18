import React from "react";
import "./Testimonial.css";
function Testimonial() {
  return (
    <div id="slider"  title="Double Click for moving the slide">
      <input type="radio" name="slider" id="slide1" checked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide_1">
              <div className="slide-content">
                <h2>2020</h2>
                <p>YEAR OF ESTABLISHMENT</p>
              </div>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
                <h2>12+</h2>
                <p>SUCCESSFUL WEBINARS</p>
              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
                <h2>3+</h2>
                <p>COURSES</p>
              </div>
            </div>
            <div className="slide slide_4">
              <div className="slide-content">
                <h2>20+</h2>
                <p>TEAM MEMBERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
      </div>
      <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
      </div>
    </div>
  );
}

export default Testimonial;
