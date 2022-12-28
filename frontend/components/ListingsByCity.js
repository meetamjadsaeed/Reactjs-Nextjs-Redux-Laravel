import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Search from "./Search";
import Head from "next/head";

const ListingsByCity = () => {
  const [listings, setListings] = useState();
  const [user, setUser] = useState();
  const [getLocation, setLocation] = useState({
    city: "",
    currencySymbol: "",
  });
  //get user token
  const token = user ? user.data.token : "not found";

  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://127.0.0.1:8000/api/searchbycity/${geoplugin_city()}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => setListings(result.data.data));
    //   .then((result) => console.log("by city", result));
  };

  const displayLocation = () => {
    setLocation({
      city: geoplugin_city(),
      currencySymbol: geoplugin_currencySymbol_UTF8(),
    });
  };

  useEffect(() => {
    getData();
    // console.log(token);
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

    displayLocation();

    //  console.log(getLocation)
  }, []);

  return (
    <>
      <Head>
        {/* paste here previous copy links form the google font website */}

        <script
          language="JavaScript"
          src="http://www.geoplugin.net/javascript.gp"
          type="text/javascript"
        ></script>
      </Head>

      {/* <Search /> */}

      <div className="listingsWrapper">
        {listings ? (
          listings.map((item) => {
            return (
              <Link href={`http://localhost:3000/posts/${item.post_id}`}>
                <div className="card">
                  <img
                    src="https://c4.wallpaperflare.com/wallpaper/471/337/300/red-hair-girl-freckles-glasses-library-reading-book-wallpaper-preview.jpg"
                    alt=""
                  />
                  <h3>{item.post_title}</h3>
                  <p> {item.post_content}</p>
                  <h3>{item.city} </h3>
                  <h3>
                    {getLocation
                      ? getLocation.currencySymbol
                      : "Price is not available"}{" "}
                    1000
                  </h3>
                  {/* <h3> By {item.author.first_name} </h3> */}
                  {/* <h3> In Category: {item.category.category_title} </h3> */}

                  {/* <button className="btn">
                        Read More
                    </button> */}
                </div>
              </Link>
            );
          })
        ) : (
          <p>Listings are not available in your city...</p>
        )}
      </div>
    </>
  );
};

export default ListingsByCity;
