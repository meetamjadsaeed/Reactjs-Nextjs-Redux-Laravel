import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";


export default function allTags() {
  return (
    <>
      <Header />

      <div>
        <section>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>All Tags</h2>
          <Tags />
        </section>
      </div>

      <Footer />
    </>
  );
}
