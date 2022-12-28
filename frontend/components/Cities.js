import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Cities = () => {
  const [listings, setListings] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get("   http://127.0.0.1:8000/api/posts  ", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
        },
      })
      .then((result) => setListings(result.data.data));
    //   .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="listingsWrapper">
          {listings ? (
            listings.map((item) => {
              return (
                <Link
                  href={`http://localhost:3000/postswithcat/${item.category_id}`}
                >
                  <div
                    className="card"
                    style={{ width: "400px", height: "400px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                      alt=""
                    />
                  </div>
                </Link>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cities;
