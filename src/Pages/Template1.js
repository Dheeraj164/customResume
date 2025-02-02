import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Template1.css";
import { Button } from "react-bootstrap";

function Template1() {
  const printFile = () => {
    window.print();
  };

  return (
    <div>
      <div className="wrapper clearfix" contentEditable>
        <div className="left">
          <div className="name-hero">
            <div className="me-img"></div>

            <div className="name-text">
              <h1>
                Anthony <em>Adamski</em>
              </h1>
              <p>10 Iroquois St Boston, MA 02120</p>
              <p>adamskianthony@gmail.com</p>
              <p>(956) 500-5558</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <section>
              <h1>Employment</h1>
              <p>
                Winter 2015 - Present{" "}
                <em>Grand Interactive, llc. | Mobile App Developer</em>
              </p>
              <p>
                Raised $78,000 in early stage funding, created initial design
                concepts, and oversaw initial development. Currently oversee and
                maintain all front end code and server functionality.
              </p>
              <p>
                Spring 2012 - Winter 2015 |{" "}
                <em>PadMatcher Inc. | CTO, Co-Founder</em>
              </p>
              <p>
                Raised $78,000 in early stage funding, created initial design
                concepts, and oversaw initial development. Oversaw and
                maintained all front end code and server functionality.
              </p>
              <p>
                Fall 2011 - Fall 2013 |{" "}
                <em>Penrose Realty llc. | Desinger & Assistant</em>
              </p>
              <p>
                Responsible for all technical areas. Maintain servers,
                computers, and provide in office technical support. Rebranded
                company from ground up including a fully responsive website.{" "}
              </p>
            </section>
            <section>
              <h1>Technical Skills</h1>
              <ul className="skill-set">
                <li>Mobile Development</li>
                <li>Xamarin</li>
                <li>CSS3</li>
                <li>Adobe Photoshop</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JQUERY</li>
                <li>UI Design</li>
                <li>Company Branding</li>
                <li>Responsive Web Design</li>
              </ul>
            </section>
            <section>
              <h1>References</h1>
              <p>
                William Grand | <em>Grand Interactive, llc. | CEO</em>
              </p>
              <p>(617) 448-0910 | wgrand@grandinteractive.com</p>
              <p>
                Eric Chauvin | <em>PadMatcher Inc. | CEO</em>
              </p>
              <p>(617) 448-0910 | eric@padmatcher.com</p>
              <p>
                Chris Heller <em>Penrose Realty LLC. | Broker</em>
              </p>
              <p>(617) 794-4554 | chris@penroserealty.com</p>
            </section>
            <section>
              <h1>Personal Interests</h1>
              <ul className="skill-set">
                <li>Faith</li>
                <li>Biblical Studies</li>
                <li>Playing Guitar</li>
                <li>Song Writing</li>
                <li>Health & Nutrition</li>
                <li>Reading</li>
              </ul>
            </section>
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
      {/* {setShowButton(!showButton)} */}
    </div>
  );
}

export default Template1;
