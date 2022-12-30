import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Cities = () => {
  const [listings, setListings] = useState();
  const [user, setUser] = useState();

  //get user token
  const token = user ? user.data.token : "not found";

  const getData = async () => {
    // Get Posts
    await axios
      .get("   http://127.0.0.1:8000/api/posts  ", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => setListings(result.data.data));
    //   .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
    console.log("check url", process.env.DB_HOST);
    // check user login
    // console.log("isAuthenticated" + user);
    const loggedInUser = localStorage.getItem("token");
    // console.log(localStorage.getItem("token"));

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // console.log(foundUser);
      setUser(foundUser);
    } else {
      console.log("User Not Found");
    }

  }, []);

  return (
    <>
      <div className="container">
        <div className="listingsWrapper">
          {listings ? (
            listings.map((item) => {
              return (
                <Link
                  href={`postswithcat/${item.category_id}`}
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
