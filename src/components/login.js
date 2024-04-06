import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const navigatetoSiginPage = () => {
    navigate("/");
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (err) {
      console.error(err);
      alert("Failed to login" + JSON.stringify(err));
    }
  };

  return (
    <div>
      <Card>
        <h1 className="mt-5">Login Page</h1>
        <Form
          onSubmit={(e) => {
            loginHandle(e);
          }}>
          <Form.Group className="mt-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button variant="outline-secondary" type="submit" className="mb-2">
            Login
          </Button>
        </Form>
        <h6>
          Does not Have a account, Click here to {" "}
          <a href="./login" onClick={navigatetoSiginPage}>
            {" "}
            Signin
          </a>
        </h6>
      </Card>
    </div>
  );
}

export default Login;
