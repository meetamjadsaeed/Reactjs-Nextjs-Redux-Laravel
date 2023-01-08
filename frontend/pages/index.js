import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Listings from "../components/Listings";
import Categories from "../components/Categories";
import Search from "../components/Search";
import ListingsByCity from "../components/ListingsByCity";
import AllCities from "../components/AllCities";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          language="JavaScript"
          src="http://www.geoplugin.net/javascript.gp"
          type="text/javascript"
        ></script>
      </Head>

      <Header />

      <Search />

      <div>
        <h2 className="heading" style={{ textAlign: "center" }}>
          Welcome to the Empire Listings
        </h2>

        <section>
          <h2 style={{ textAlign: "center" }}>Categories</h2>
          <Categories />

          <h2 style={{ textAlign: "center" }}>Browse by Cities</h2>
          <AllCities />

          <h2 style={{ textAlign: "center" }}>
            Based on your Current Location{" "}
          </h2>
          <ListingsByCity />

          <h2 style={{ textAlign: "center" }}>All Listings</h2>
          <Listings />
        </section>
      </div>

      <Footer />
    </>
  );
}
