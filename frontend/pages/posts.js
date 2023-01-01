import Header from "../components/Header";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import Search from "../components/Search";
// const router = useRouter();
// import { Linkk } from "react-router-dom";

export default function Posts() {
  return (
    <>
      {/* Header */}
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

      {/* </div> */}

      {/* Footer */}
      <Footer />
    </>
  );
}
