
// import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/esm/Button';
import Button from 'react-bootstrap/Button';

import Link from "next/link";


export default function author(props) {
  // console.log(props);
  //   // const router = useRouter()
  // // const id  = router.query.post;

  const [author, setAuthor] = useState(props.data.data);
  const [postsByAuhtor, setPostsByAuhtor] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(` ${process.env.NEXT_PUBLIC_BACKEND_API}authors/${author.author_id}/posts` , {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
        },
      })
      .then((result) => setPostsByAuhtor(result.data.data));
      // .then((result) => console.log(result.));
  };

  useEffect(() => {
    getData();
  }, []);




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
  //   if (!router.isReady) return;
  //   getData();
  // }, [router.isReady]);
 
  return (
    <>
 <Head>
        
        </Head>
  
        {/* Header */}
        <MainNav />

      {/* <div>VeiwPost {id}</div> */}
      {/* <p>{post.post_title}</p> */}

{/* <h1>Posts related to this category are</h1> */}

{/* <div className="container">
   
   <Row>
  



     <Col lg={4}>

            <h2>{author.first_name}</h2>
   
     </Col>




  
</Row>
   
  
   
 
   

</div> */}


<div class="card-body">
        <div class="card_background_img">
         
        </div>
        <div class="card_profile_img">
        {/* <image src="https://source.unsplash.com/7Sz71zuuW4k" alt=" Your Name" /> */}
        </div>
        <div class="user_details">
            <h3>{author.first_name}</h3>
            <p>{author.author_email}</p>
        </div>
        <div class="card_count">
            <div class="count">
                <div class="fans">
                    <h3>100</h3>
                    <p>Likes Posts</p>
                </div>
                {/* <div class="following">
                    <h3>202</h3>
                    <p>Followings</p>
                </div> */}
                <div class="post">
                    <h3>552</h3>
                    <p>Posts</p>
                </div>
            </div>
             {/* <div class="btn">Follow</div> */}
        </div>
    </div>


    <section styles={{'backgroundColor': '#f7f6f6'}}>
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10 col-xl-8">
        <div class="d-flex justify-content-between align-items-center mb-4">
          {/* <h4 class="text-dark mb-0">Unread comments (4)</h4> */}
          {/* <div class="card">
            <div class="card-body p-2 d-flex align-items-center">
              <h6 class="text-primary fw-bold small mb-0 me-1">Comments "ON"</h6>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
              </div>
            </div>
          </div> */}
        </div>
<h2 style={{'textAlign':'center'}}>Posts By This Author</h2>
        { postsByAuhtor ? 
  postsByAuhtor.map((item)=>{
    return (

        <div class="commentcard mb-3" style={{'borderRadius': '10px','boxShadow': '5px 5px 30px 7px rgb(0 0 0 / 25%)','padding': '10px'}}>
          <div class="commentcard-body">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
                height="40" />
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-primary fw-bold mb-0">
                  <Link href={`http://localhost:3000/posts/${item.post_id}`}>
                    Veiw
                    </Link>
                    
                    <span class="text-dark ms-2">{item.post_title}</span>
                   
                  </h6>
                  {/* <p class="mb-0">2 days ago</p> */}
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="small mb-0" styles={{'color': '#aaa'}}>
                  {item.post_content}
                  </p>
                  <div class="d-flex flex-row">
                    <i class="fas fa-star text-warning me-2"></i>
                    <i class="far fa-check-circle" styles={{'color': '#aaa'}}></i>
                  </div>
                </div>
                {/* <Button size="sm" variant="outline-success">Success</Button> */}
              </div>
            </div>
          </div>
        </div>

)
}) : <p>loading...</p>
}

      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <Footer />


    </>
  );
}
export async function getServerSideProps(context) {
  // console.log(context);
  // const router = useRouter();
  
  // const slug  = router.query.post;
  const slug  = context.query.author;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}authors/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
    },
  })
  const data = await res.json()

  // let data = await axios.get(`http://127.0.0.1:8000/api/posts/${slug}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
  //       },
  //     })
  //     .then((result));

  return {
    props: { data }, // will be passed to the page component as props
}
}