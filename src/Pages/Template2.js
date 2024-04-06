import React from "react";
import "../Styles/Template2.css";
import { Button } from "react-bootstrap";

function Template2() {
  const printFile = () => {
    window.print();
  };

  return (
    <div className="maindiv">
      <div className="container" contentEditable>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="title text-center">
              <h1>Vishnu Padmanabhan</h1>
              <h3>Fullstack Developer</h3>
              <h4>
                <a href="http://neoelemento.com">neoelemento.com</a>
              </h4>
              <hr />
              <ul className="list-inline">
                <li>
                  <i className="devicon-laravel-plain colored"></i>
                </li>
                <li>
                  <i className="devicon-javascript-plain colored"></i>
                </li>
                <li>
                  <i className="devicon-html5-plain colored"></i>
                </li>
                <li>
                  <i className="devicon-angularjs-plain colored"></i>
                </li>
                <li>
                  <i className="devicon-linux-plain"></i>
                </li>
              </ul>
            </div>

            <div className="summary">
              <h2 className="text-center">Summary</h2>
              <p>
                A full stack developer with over 7 years of experience in
                designing and developing web applications. Looking for
                challenging roles in web and mobile industry to enhance my
                skills and provide my services to add value to the products of
                the organization. Highly motivated self learner with a passion
                for learning and keeping informed of the latest in technology.
              </p>

              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <p>Business Analysis</p>
                  <p>Project Management</p>
                  <p>WordPress Management</p>
                </div>
                <div className="col-md-3 col-sm-3">
                  <p>Development</p>
                  <p>Design</p>
                  <p>Linux Admin</p>
                </div>
                <div className="col-md-3 col-sm-3">
                  <p>Agile Development</p>
                  <p>Scrum of Scrum</p>
                  <p>Frontend Development</p>
                </div>
                <div className="col-md-3 col-sm-3">
                  <p>Code Review</p>
                  <p>Peer Review</p>
                  <p>Fullstack Development</p>
                </div>
              </div>
            </div>

            <div className="work-experience">
              <h2 className="text-center">Work Experience</h2>
              <div className="row experience-title">
                <div className="col-md-9">
                  <h3>Some company</h3>
                  <h4>Program Manager</h4>
                  <h5>Some project</h5>
                </div>
                <div className="col-md-3">
                  <h3>June 2015 - Present</h3>
                </div>
              </div>
              <div className="row experience-summary">
                <div className="col-md-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    fugiat ullam, pariatur, iste sunt ducimus modi cum ad
                    provident dolores mollitia voluptatibus nemo amet ipsam
                    corporis, accusamus repudiandae nihil! Sed?
                  </p>
                </div>
              </div>

              <div className="row experience-title">
                <div className="col-md-9">
                  <h3>Some company</h3>
                  <h4>Associate Project Manager</h4>
                  <h5>Some project</h5>
                </div>
                <div className="col-md-3">
                  <h3>Oct 2012 - Jun 2015</h3>
                </div>
              </div>
              <div className="row experience-summary">
                <div className="col-md-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores sequi voluptatibus similique repellat, qui officiis
                    excepturi odit esse magni veritatis voluptatum iste
                    molestias illum labore fugit nihil, modi inventore.
                    Excepturi!:
                  </p>
                  <ul>
                    <li>Lead - UI design and development.</li>
                    <li>
                      WordPress expert - Configuration, maintenance and custom
                      development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="outline-danger"
        type="submit"
        onClick={printFile}
        className="mb-2">
        Print Resume
      </Button>
    </div>
  );
}

export default Template2;
