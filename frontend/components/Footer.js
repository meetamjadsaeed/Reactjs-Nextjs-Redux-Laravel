// import MainNav from "./MainNav";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <footer>
        <div class="footer-content" style={{ marginTop: "20px" }}>
          <h3 style={{ textAlign: "center" }}>Footer</h3>
          <p style={{ textAlign: "center" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsumlorem ipsum
          </p>
          <p style={{ textAlign: "center" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsumlorem ipsum
          </p>

          <ul class="socials">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom" style={{ textAlign: "center" }}>
          <p>
            copyright &copy;2021 <a href="#">meetamjadsaeed</a>{" "}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
