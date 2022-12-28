import MainNav from "./MainNav";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <MainNav />

      <div
        className="d-sm-flex align-items-center justify-content-between w-100"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
          <span className="text-secondary text-uppercase">Find AnyThing</span>
          <h1 className="display-4 my-4 font-weight-bold">
            Empire <span style={{ color: "#9B5DE5" }}>Listings</span>
          </h1>
          <Link href="/about">
            <a
              className="btn px-5 py-3 text-white mt-3 mt-sm-0"
              style={{ "border-radius": "30px", "background-color": "#9B5DE5" }}
            >
              About
            </a>
          </Link>
        </div>

        <div
          className="col-md-8 h-100 clipped"
          style={{
            "min-height": "350px",
            "background-image":
              "url(https://www.hdwallpapers.in/download/smiley_sushant_is_reading_book_wearing_blue_dress_in_bookshelves_background_hd_sushant_singh_rajput-1366x768.jpg)",
            "background-position": "center",
            "background-size": "cover",
          }}
        ></div>
      </div>

      {/* <Container fluid>
        <Row>
          <Col lg={5}>
            <div className="mt-5 mainHead">
              <h1>
                Let’s find <span>yours Dream..</span>
              </h1>
              <p>
                Building award winning properties across London UK and the All
                world
              </p>
            </div>

            <div className="mt-5">
              <Button className="m-3" variant="success">Buy</Button>
              <Button className="m-3" variant="success">Sell</Button>
              <Button className="m-3" variant="success">Rent</Button>
            </div>
          </Col>

          <Col lg={7}>
            <img
              className="w-75"
              src="assets/images/pierre-chatel-innocenti-gxyeia7Syuk-unsplash.png"
              alt="Image size 25"
            />
          </Col>
        </Row>

        

      </Container> */}

      {/* Carousel compoent start  */}
      {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      {/* Carousel compoent end  */}
    </>
  );
}
