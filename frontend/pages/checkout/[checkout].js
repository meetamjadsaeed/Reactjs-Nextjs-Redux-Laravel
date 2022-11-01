
// import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Head from 'next/head';
import MainNav from '../../components/MainNav';
import Footer from '../../components/Footer';


export default function Checkout(props) {
  console.log(props);
  //   // const router = useRouter()
  // // const id  = router.query.post;

  const [product, setPackaget] = useState(props.data.data);

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
<p> Checkout</p>


<div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 my-5">
                <div className="card ">
                    <img src="https://raw.githubusercontent.com/chafikamr/FrontendMentor-order-comfirmation-snippet/16cf301566ec0f0e87a114d963779d45aef57789/images/illustration-hero.svg" className="card-img-top" alt="..." />
                    <div className="card-body px-4 text-center">
                        <h5 className="card-title  mt-1">{product.product_name}</h5>
                        <p className="card-text text-muted mt-3">
                            {product.product_description}
                        </p>
                        <div className="alert alert-light row plan ">
                            <div className="col-3">
                                <img src="https://cdn.amasty.com/media/amasty/webp/catalog/product/cache/dd7f24249e71a20e1c3a482e18db1167/o/n/one-step-checkout-lite-for-magento-2_61c0860accfca_png.webp" className="img-responsive" alt="" />
                            </div>
                            <div className="col-6">
                                <div className="fw-bold"> Annual Plan</div>
                                <div>Rs 5000/ year</div>
                            </div>
                            <div className="col-3 d-flex align-items-center ">
                                <a href="#"> Change</a>
                            </div>
                        </div>
                        <div className="row ">
                            <a href="#" className="btn btn-primary btn-lg col-12 buy-now-btn  ">Proceed to payement</a>
                            <span className="text-secondary h6 mt-3 d-block">Cancel Order</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>




      
      {/* Footer */}
      <Footer />


    </>
  );
}
export async function getServerSideProps(context) {
  // console.log(context);
  // const router = useRouter();
  
  // const slug  = router.query.post;
  const slug  = context.query.checkout;

  const res = await fetch(` http://127.0.0.1:8000/api/products/${slug}`, {
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