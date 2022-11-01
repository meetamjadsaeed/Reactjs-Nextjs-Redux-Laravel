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
import PackageForm from "../components/PackageForm";


// import qs from 'qs';
var qs = require('qs');

export default function Package() {
  const [user, setUser] = useState()


  useEffect(() => {
    // console.log("isAuthenticated" + user);
    const loggedInUser = localStorage.getItem("token");
  // console.log(localStorage.getItem("token"));
  
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // console.log(foundUser);
      setUser(foundUser);
    }
    else {
      console.log("User Not Found");
    }
  }, []);
  
  
  return (
    <>
      <Head>
        
      </Head>

      {/* Header */}
      <MainNav />

      {/* <div>Post new Ad</div> */}

      {
        
        user ?
        (<PackageForm user={user} />)  :
       (
        <Link href={"../login"}>
       <button className="btn">Please Login First</button>
       </Link>
       )
       
       }
      

      {/* Footer */}
      <Footer />
    </>
  );
}
