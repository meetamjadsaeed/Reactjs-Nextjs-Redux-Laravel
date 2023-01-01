import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Head from "next/head";
import MainNav from "../components/MainNav";
import Form from "react-bootstrap/Form";
import Link from "next/link";

export default function Register() {
  // const [registerDetails, setRegister] = useState()

  const [registerDetails, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    pass: "",
    password_confirmation: "",
  });

  const user = {
    first_name: registerDetails.first_name,
    last_name: registerDetails.last_name,
    email: registerDetails.email,
    password: registerDetails.pass,
    password_confirmation: registerDetails.password_confirmation,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_API}registration`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("You are Successfully registered");
        // console.log(res);
        // navigate("http://localhost:3000/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Container>
        {/* Header */}
        <MainNav />

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) =>
                setRegister({ ...registerDetails, first_name: e.target.value })
              }
            />

            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) =>
                setRegister({ ...registerDetails, last_name: e.target.value })
              }
            />

            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setRegister({ ...registerDetails, email: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setRegister({ ...registerDetails, pass: e.target.value })
              }
            />

            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              onChange={(e) =>
                setRegister({
                  ...registerDetails,
                  password_confirmation: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Footer */}
        <Footer />
      </Container>
    </>
  );
}
