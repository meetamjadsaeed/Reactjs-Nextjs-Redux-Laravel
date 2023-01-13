import Footer from "../components/Footer";

import { useState } from "react";

import Head from "next/head";
import MainNav from "../components/MainNav";

export default function Checkout() {
  const [packages, setPackages] = useState();

  return (
    <>
      <Head></Head>

      <MainNav />

      <div>
        <p>Checkout</p>
      </div>

      <Footer />
    </>
  );
}
