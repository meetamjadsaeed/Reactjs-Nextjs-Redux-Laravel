import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import MainNav from "../components/MainNav";
import Link from "next/link";
import PostForm from "../components/PostForm";

var qs = require("qs");

export default function Post() {
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
        <PostForm user={user} />
      ) : (
        <Link href={"../login"}>
          <button className="btn">Please Login First</button>
        </Link>
      )}

      <Footer />
    </>
  );
}
