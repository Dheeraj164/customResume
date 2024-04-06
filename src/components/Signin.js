import React from "react";
import '../Styles/Signin.css'
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, googleProvider } from "../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();


  // function for password validation 
  const formvalidation = (password) => {
    let p = document.getElementById("signin_message");
    console.log(p);
    p.innerHTML = '';

    let result = true;
    if (password.length >= 8) {
      p.innerHTML += "password must contain ";
      if (!/\d/.test(password)) {
        p.innerHTML += "Numbers, ";
        result = false;
      }
      if (!/[A-Z]/.test(password)) {
        p.innerHTML += "Captial letter words, ";
        result = false;
      }
      if (!/[a-z]/.test(password)) {
        p.innerHTML += "Small letter words, ";
        result = false;
      }
      if (!/[a-z]/.test(password)) {
        p.innerHTML += "Special Characters ";
        result = false;
      }
    } else {
      alert("Password is less than 8 Character");      
      result = false;
    }
    return result;
  };

  //this function is used to Handle using firebase
  const signinHandle = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const passwordconfir = e.target.elements.passwordconfir.value;


    if (password === passwordconfir) {
      const result = formvalidation(password);
      console.log(result);
      if (result === true) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate("/Home");
        } catch (err) {
          console.error(err.code);
          alert("Failed to sigin" + JSON.stringify(err.code));
        }
      }
    } else {
      e.target.elements.password.value = "";
      e.target.elements.passwordconfir.value = "";
      alert("Password does not match");
    }
  };

  //this function is used to Handle signin using Google
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/Home");
    } catch (err) {
      console.error(err.code);
      alert("Failed to sigin" + JSON.stringify(err.code));
    }
  };
  
  //this function is used to navigate to login page
  const navigatetoLoginPage = () => {
    navigate("/login");
  };
  //this is the main return
  return (
    <div>
      <Card>
        <h1 className="mt-5"> Sign In Page</h1>
        <Form
          onSubmit={(e) => {
            signinHandle(e);
          }}>
          <Form.Group className="mt-3">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              type="password"
              placeholder="Enter Password again"
              name="passwordconfir"
              required
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="mb-2">
            Sign In
          </Button>
        </Form>
        <Button
          variant="outline-danger"
          type="submit"
          onClick={signInwithGoogle}
          className="mb-2 w-100">
          Sign In With Google
        </Button>
        <h6>
          already have an account click here to{" "}
          <a href="./login" onClick={navigatetoLoginPage}>
            {" "}
            login
          </a>
        </h6>
      </Card>
      <b><p style={{ color: "red" }} id="signin_message"></p></b>
    </div>
  );
}

export default Signin;
