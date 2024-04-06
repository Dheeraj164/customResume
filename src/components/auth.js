import { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
    } catch (err) {
      console.error(err);
    }
  }

  const signInwithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {/* <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/> */}

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={signIn} className="mb-2">
              Sign in
            </Button><br></br>

            <Button variant="outline-danger" type="submit" onClick={signInwithGoogle} className="mb-2">
              Sign In With Google
            </Button> <br></br>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};


