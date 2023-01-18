import React, { useState } from 'react';
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function postsWithTag(props) {
  const [postsWithTag, setpostsWithTag] = useState(props.data.data);
  return (
    <>
      <Head>
      </Head>
      <MainNav />
      <h1>Posts related to this category are</h1>
      <div className="container">
        <Row>
          {postsWithTag ?
            postsWithTag.map((item) => {
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
                      src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                      alt=""
                    />
                    <div class="content">
                      <h2>{item && item.title}</h2>
                      <p>
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
            }) :
            <p>loading...</p>
          }
        </Row>
      </div>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const slug = context.query.postsWithTag;
  const res = await fetch(` ${process.env.NEXT_PUBLIC_BACKEND_API}tags/${slug}/posts`, {
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