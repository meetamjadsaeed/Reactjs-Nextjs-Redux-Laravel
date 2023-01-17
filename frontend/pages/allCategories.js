import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

export default function allCategories() {
  return (
    <>
      <Header />

      <div>
        <section>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            All Categories
          </h2>
          <Categories />
        </section>
      </div>

      <Footer />
    </>
  );
}
