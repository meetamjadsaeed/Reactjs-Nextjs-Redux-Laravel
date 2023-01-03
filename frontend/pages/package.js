import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import MainNav from "../components/MainNav";
import Link from "next/link";
import PackageForm from "../components/PackageForm";

// import qs from 'qs';
var qs = require("qs");

export default function Package() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      console.log("User Not Found");
    }
  }, []);

  return (
    <>
      <Head></Head>

      <MainNav />

      {user ? (
        <PackageForm user={user} />
      ) : (
        <Link href={"../login"}>
          <button className="btn">Please Login First</button>
        </Link>
      )}
      <Footer />
    </>
  );
}
