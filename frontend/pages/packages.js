import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import MainNav from "../components/MainNav";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Packages() {
  const router = useRouter();

  const [packages, setPackages] = useState();

  const getData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}products`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
        },
      })
      .then((result) => setPackages(result.data.products.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head></Head>

      <MainNav />

      <div class="background">
        <div class="container">
          <div class="panel pricing-table">
            <Row>
              {packages ? (
                packages.map((item) => {
                  return (
                    <Col lg={4}>
                      <div class="pricing-plan">
                        <img
                          src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                          alt=""
                          class="pricing-img"
                        />
                        <h2 class="pricing-header">{item.name}</h2>
                        <ul class="pricing-features">
                          <li class="pricing-features-item">Custom domains</li>
                          <li class="pricing-features-item">
                            Sleeps after 30 mins of inactivity
                          </li>
                        </ul>
                        <span class="pricing-price">Free</span>

                        <Link
                          href={`http://localhost:3000/packages/${item.id}`}
                        >
                          <Button variant="primary" className="pricing-button">
                            {" "}
                            Veiw{" "}
                          </Button>
                        </Link>
                        <br />

                        <Link
                          href={`http://localhost:3000/checkout/${item.id}`}
                        >
                          <Button variant="primary" className="pricing-button">
                            {" "}
                            Buy{" "}
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  );
                })
              ) : (
                <p>loading...</p>
              )}
            </Row>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
