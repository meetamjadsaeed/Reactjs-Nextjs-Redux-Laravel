
// import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';


export default function Post(props) {
  // console.log(props);
  //   // const router = useRouter()
  // // const id  = router.query.post;

  const [post, setpost] = useState(props.data.data);

  const [comments, setComments] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}posts/${post.post_id}/comments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
        },
      })
      .then((result) => setComments(result.data.data));
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


      <div styles={{ "width": "710px", "margin": "0 auto" }}>
        <div className="bacon-blog-post bacon-shadow">
          <img src="http://i2.wp.com/garybacon.com/wp-content/uploads/2016/06/finding_what_challenges.png" className="wp-post-image" />
          <div className="bacon-blog-post-inner">
            <h2><a href="http://garybacon.com/post/finding-what-challenges-you/" rel="bookmark" title="Permanent link to Finding What Challenges You" className="title-row">{post && post.post_title}</a></h2>
            {/* <p>{post && post.post_title}</p> */}
            <p>In an <a href="https://www.youtube.com/watch?v=eaVBDPAy-SI" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.youtube.com/watch?v=eaVBDPAy-SI', 'interview']);" target="_blank">interview</a>, Neil deGrasse Tyson talks about science
              boosting the economy. He goes on to say, most companies and politicians don’t have the tolerance for the long term view.</p>
            <p>You don’t motivate a group of kids, saying “Who wants to be a mechanical engineer and help improve flight efficiency by 15% compared to the airplane your father flew?”</p>
            <p>But instead, ask “Who wants to be an engineer and help develop airfoils to help fly in the atmosphere of Mars?” With the latter, you get the best students in the class.</p>
            <blockquote>
              <p>Flow is the intersection of what you are good at and what challenges you— where difficulty and competency meet.</p>
              <p>When your competency exceeds the difficulty of a task, you are bored. And when the difficulty exceeds your competency, you are anxious. That was my problem: I was bored.</p>
              <p>— Jeff Goins, <a href="http://amzn.to/28INctw" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://amzn.to/28INctw', 'The Art of Work']);" target="_blank">The Art of Work</a></p>
            </blockquote>
            <p>There are times where the day job requires me to do the mundane. That’s fine. We can’t always have constant excitement. It’s called work for a reason.</p>
            <h3>Inspiration</h3>
            <p>For inspiration, this is one of the reasons that I have side projects. To keep pushing my limits. It allows me to play. To find out how to make user interfaces for VR, tinker with implementing the <a href="https://www.ampproject.org/" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.ampproject.org/', 'Acelerated Mobile Pages Project']);" target="_blank">Acelerated Mobile Pages Project</a> on content, create a <a href="http://garybacon.com/snapchat/" target="_blank">landing page for Snapchat</a>, write books, and so much more.</p>

            <h3 style={{ 'textAlign': 'center' }}>Comments on this Listing</h3>

            {/* 
      { comments ? 
  comments.map((item)=>{
    return (
<div>
  <p>{item.comment}</p>
</div>

      )
    }) : <p>loading...</p>
    } */}



            <section styles={{ 'backgroundColor': '#f7f6f6' }}>
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

                    {comments ?
                      comments.map((item) => {
                        return (

                          <div class="commentcard mb-3">
                            <div class="commentcard-body">
                              <div class="d-flex flex-start">
                                <img class="rounded-circle shadow-1-strong me-3"
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
                                  height="40" />
                                <div class="w-100">
                                  <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h6 class="text-primary fw-bold mb-0">
                                      {item.author.first_name}
                                      <span class="text-dark ms-2">{item.comment}</span>
                                    </h6>
                                    <p class="mb-0">2 days ago</p>
                                  </div>
                                  <div class="d-flex justify-content-between align-items-center">
                                    <p class="small mb-0" styles={{ 'color': '#aaa' }}>
                                      {/* <a href="#!" class="link-grey">Remove</a> • */}
                                      <a href="#!" class="link-grey">Reply</a> •
                                      <a href="#!" class="link-grey">Translate</a>
                                    </p>
                                    <div class="d-flex flex-row">
                                      <i class="fas fa-star text-warning me-2"></i>
                                      <i class="far fa-check-circle" styles={{ 'color': '#aaa' }}></i>
                                    </div>
                                  </div>
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



          </div>
        </div>
      </div>




      {/* Footer */}
      <Footer />


    </>
  );
}
export async function getServerSideProps(context) {
  const slug = context.query.post;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}posts/${slug}`, {
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