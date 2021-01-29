import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./SignUp.css";
import "/Users/anisoiiuliaroxana/Desktop/iap/notes/src/components/Button.css";

export function SignUp() {
  return (
    <Container id="container">
      <Form>
        <Form.Group id="form-group">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group id="form-group">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group id="form-group" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label=" Check me out" />
        </Form.Group>

        <Button id="button" variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
