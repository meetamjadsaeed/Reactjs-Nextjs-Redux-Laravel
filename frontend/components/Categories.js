import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../store/categoriesSlice.js";
import { STATUSES } from "../store//categoriesSlice.js";

const Categories = () => {
  const [listings, setListings] = useState();
  // console.log(listings);
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.category);

  const getData = async () => {
    // // Get Posts
    // await axios
    //   .get("    http://127.0.0.1:8000/api/categories  ", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
    //     },
    //   })
    //   .then((result) => setListings(result.data.data));
    // //   .then((result) => console.log(result));

    dispatch(fetchCategories());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="listingsWrapper">
        {data.data ? (
          data.data.map((item) => {
            return (
              <Link
                href={`http://localhost:3000/postswithcat/${item.category_id}`}
              >
                <div className="card" style={{ minHeight: "200PX" }}>
                  <h4>{item.category_title}</h4>
                </div>
              </Link>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
};

export default Categories;
