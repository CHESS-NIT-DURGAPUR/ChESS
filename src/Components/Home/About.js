import React from "react";
import YouTube from "react-youtube-embed";
import Team from '../assets/team.jpg'
import "./About.css";
function About() {
  return (
    <div>
      <div className="container">
        <section className="py-5">
          <div className="row margin_top">
            <div className="col-sm-6">
              <YouTube id="YxHAG6oSfsw" className="about__image" />
            </div>

            <div className="about__lead col-sm-6">
              <h2 className="text_primary">About Us</h2>
              <h1 className="text-white">
                What We <span style={{ color: "#FFD700" }}>Do</span>{" "}
              </h1>
              <hr width="50%" className="hr" />
              <p className="text-white">
                The Chemical Engineering Student's Society (CHESS) is an
                independent student run society of Chemical Engineering
                Department of NIT Durgapur.It is solely dedicated to form a
                network among all the students,faculty members and alumni of the
                department. It promotes interaction within the department and
                implements academic , social and other programs of interest to
                its members. <br /> We are conducting several events every year
                for the betterment of students.
              </p>
              <a href="/member" className="btn custom-btn btn-9">
                VIEW OUR TEAM <i className="fa fa-users" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="row py-5 margin_top">
            <div className="col-sm-6">
              <h3 className="text-capitalize text-white">
                Why ChESS |<span className="text_primary"> Join us</span>
              </h3>
              <hr className="hr"/>
              <p className="lead text-white">
                In few years we have expanded the range of events that we
                conduct for the students to extend their capabilities.
              </p>
              <div className="row row-15 text-white">
                <div className="col-xl-6">
                  <div className="box-default box">
                    <h6 className="box-default-title" style={{ color: "#00008B" }}>Innovative Webinars</h6>
                    <hr width="75%"/>
                    <p className="box-default-description">
                      We conduct seminars on a variety of topics.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="box-default box">
                    <h6 className="box-default-title" style={{ color: "#00008B" }}>Strategic Thinking</h6>
                    <hr width="75%"/>
                    <p className="box-default-description">
                      We conduct hackathons so students can work upon practical
                      problems.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="box-default box">
                    <h6 className="box-default-title" style={{ color: "#00008B" }}>Experienced Team</h6>
                    <hr width="75%"/>
                    <p className="box-default-description">
                      We have members who work hard to make CHESS
                      better everyday.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="box-default box">
                    <h6 className="box-default-title" style={{ color: "#00008B" }}>Creative Courses</h6>
                    <hr width="75%"/>
                    <p className="box-default-description">
                      We conduct courses for additional skill development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
            <img src={Team} className="img-rounded team" alt="team"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
