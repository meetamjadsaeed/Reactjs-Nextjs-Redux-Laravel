import Header from "../components/Header";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import Search from "../components/Search";

export default function Posts() {
  return (
    <>
      <Header />

      <Search />

      <div>
        <section>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            All Listings
          </h2>
          <Listings />
        </section>
      </div>

      <Footer />
    </>
  );
}
