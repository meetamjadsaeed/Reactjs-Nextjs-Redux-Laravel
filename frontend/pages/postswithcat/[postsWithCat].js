
// import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function postsWithCat(props) {
  // console.log(props);
  //   // const router = useRouter()
  // // const id  = router.query.post;

  const [postsWithCat, setpostsWithCat] = useState(props.data.data);

  // const router = useRouter();

  //       const slug  = router.query.post;

  // const getData = async () => {
  //       // Get Posts
  //       const slug  = router.query.post;
  //   await axios
  //     .get(`http://127.0.0.1:8000/api/posts/${slug}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
  //       },
  //     })
  //     .then((result) => setpost(result.data.data));
  //     // .then((result) => console.log(result));
  // };

  // //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  // //         return a.json();
  // //     })
  // //         .then((parsed) => {
  // //             setBlog(parsed)
  // //         })
  // // }, [router.isReady])


  // useEffect(() => {
  //   // if (!router.isReady) return;
  //   // getData();
  //   console.log("cehck cat", postsWithCat);
  // }, []);

  return (
    <>
      <Head>

      </Head>

      <MainNav />

      <h1>Posts related to this Category are</h1>

      <div className="container">

        <Row>

          {postsWithCat ?
            postsWithCat.map((item) => {
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
                      <h3 style={{ "color": "white !important" }}>{item && item.post_title}</h3>
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

  const slug = context.query.postsWithCat;

  const res = await fetch(` ${process.env.NEXT_PUBLIC_BACKEND_API}categories/${slug}/posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
    },
  })
  const data = await res.json()
  return {
    props: { data },
  }
}