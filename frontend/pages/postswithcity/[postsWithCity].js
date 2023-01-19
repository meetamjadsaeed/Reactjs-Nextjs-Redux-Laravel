import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function postsWithCity(props) {

  const [postsWithCity, setpostsWithTag] = useState(props.data.data);

  return (
    <>
      <Head>

      </Head>

      <MainNav />


      <h1>Posts related to this City {postsWithCity[0].city} are</h1>

      <div className="container">

        <Row>

          {postsWithCity ?
            postsWithCity.map((item) => {
              return (



                <Col lg={4}>

                  <div class="card">
                    <ul>
                      <li>
                        <i class="fa-solid fa-mug-hot"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-film"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-store-alt"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-map"></i>
                      </li>
                    </ul>
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/471/337/300/red-hair-girl-freckles-glasses-library-reading-book-wallpaper-preview.jpg"
                      alt=""
                    />
                    <div class="content">
                      <h2 style={{ "color": "white !important" }}>{item && item.title}</h2>
                      <p style={{ "color": "white !important" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
                        labore laborum necessitatibus quis, earum, repellat facilis adipisci,
                        dolores corporis ipsam ratione eaque vitae quia sunt nemo et
                        repudiandae porro incidunt.
                        <button>See more...</button>
                      </p>
                    </div>
                  </div>

                </Col>


              )
            }) : <p>loading...</p>
          }



        </Row>






      </div>


      <Footer />


    </>
  );
}
export async function getServerSideProps(context) {
  const slug = context.query.postsWithCity;

  const res = await fetch(` ${process.env.NEXT_PUBLIC_BACKEND_API}searchbycity/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 2|mc7BphjBMivSMCDLPqxdpNxakFUWofTkQLOS0DCp",
    },
  })
  const data = await res.json()


  return {
    props: { data },
  }
}