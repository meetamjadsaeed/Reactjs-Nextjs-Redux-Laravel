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

export default function Login() {
  // const [loginDetails, setLogin] = useState()

  const [loginDetails, setLogin] = useState({
    email: "",
    pass: "",
  });

  const user = {
    email: loginDetails.email,
    password: loginDetails.pass,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_API}login`, user)
      .then((res) => {
        const dataNew = JSON.stringify(res.data);
        localStorage.setItem("token", dataNew);
        console.log("Successfully logged in");
        console.log(res);
        // navigate("http://localhost:3000/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {/* Header */}
      <MainNav />

      <div class="container">
        <div class="col-md-9 card mx-auto d-flex flex-row px-0">
          <div class="img-left d-md-flex d-none"></div>

          <div class="card-body d-flex flex-column justify-content-center">
            <h4 class="title text-center mt-4 pb-3">Login into accont</h4>
            <form class="col-sm-10 col-12 mx-auto" onSubmit={handleSubmit}>
              <div class="form-group ">
                <input
                  type="email"
                  class="form-control "
                  placeholder="email"
                  onChange={(e) =>
                    setLogin({ ...loginDetails, email: e.target.value })
                  }
                />
              </div>
              <div class="form-group py-3 ">
                <input
                  type="password"
                  class="form-control"
                  placeholder="***"
                  onChange={(e) =>
                    setLogin({ ...loginDetails, pass: e.target.value })
                  }
                />
              </div>
              <div class="">
                <input
                  type="submit"
                  class="btn  btn-outline-primary d-block w-100 "
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
