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
import { useRouter } from "next/router";
import Categories from "../components/Categories";
// const router = useRouter();
// import { Linkk } from "react-router-dom";

export default function allCategories() {
  return (
    <>
      {/* Header */}
      <Header />

      <div>
        <section>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            All Categories
          </h2>
          <Categories />
        </section>
      </div>

      {/* </div> */}

      {/* Footer */}
      <Footer />
    </>
  );
}
