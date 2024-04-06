import React from "react";
import "../Styles/Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Template1 from "../Assets/Template1.png";
import Template2 from "../Assets/Template2.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const favicon = document.getElementById("favicon");
  favicon.href = "";
  console.log(favicon);

  const navigate = useNavigate();

  // this function is write to navigate to template 1 page
  const NavToTemplate1 = () => {
    navigate("/Template1");
  };

  // this function is write to navigate to template 1 page
  const NavToTemplate2 = () => {
    navigate("/Template2");
  };

  // main return
  return (
    <div className="homediv">
      {/* this is the message block*/}
      <div className="welcomemessage">
        <b>
          <h1>Welcome to Resume builder</h1>
        </b>
        <h4>This is where opportunity begins</h4>
      </div>
      <div className="templatepick">
        {/* this is the bootstrap block for template choosing*/}
        <b>
          <p>Click on the resume you want to select and build</p>
        </b>
        <Container width="100%">
          <Row>
            <Col className="col1">
              <img
                src={Template1}
                alt="Template1"
                width="500"
                height="300"
                onClick={NavToTemplate1}></img>
            </Col>
            <Col className="col2">
              <img
                src={Template2}
                alt="Template1"
                width="500"
                height="300"
                onClick={NavToTemplate2}></img>
            </Col>
          </Row>
          <Row className="row2">
            <Col>
              <Button
                variant="primary"
                className="button1"
                onClick={NavToTemplate1}>
                Template1
              </Button>
              <Button variant="secondary" onClick={NavToTemplate2}>
                Template2
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
