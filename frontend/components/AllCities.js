import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Search from './Search';
import Head from "next/head";


const allCities = () => {
    const [listings, setListings] = useState();
    const [user, setUser] = useState()
    const [getLocation, setLocation] = useState(
      {
        city: "",
        currencySymbol:""
      }
    );
    //get user token
    const token = user ? user.data.token : "not found";
  
      const getData = async () => {
        // Get Posts
        await axios
          .get( `http://127.0.0.1:8000/api/posts`, {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                `Bearer ${token}`,
            },
          })
          .then((result) => setListings(result.data.data));
        //   .then((result) => console.log(result));
      };
  
      const displayLocation = () => {
        setLocation({
          city:geoplugin_city(),
          currencySymbol:geoplugin_currencySymbol_UTF8(),
        });
    
      }
    
      useEffect(() => {
        getData();
  
        console.log("check url",process.env.DB_HOST);
        // check user login 
   // console.log("isAuthenticated" + user);
   const loggedInUser = localStorage.getItem("token");
   // console.log(localStorage.getItem("token"));
   
       if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
         // console.log(foundUser);
         setUser(foundUser);
       }
       else {
         console.log("User Not Found");
       }
  
       displayLocation();
  
      //  console.log(getLocation)
        
      }, []);
  
  


  return (
    <>
    
    <Head>
        {/* paste here previous copy links form the google font website */}

        <script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
      </Head>


    {/* <Search /> */}


    <div className="listingsWrapper">
    { listings ? 
  listings.map((item)=>{
    return (
      <Link href={`http://localhost:3000/postswithcity/${item.city}`}>
                <div className="card" >
                    <img src="https://newevolutiondesigns.com/images/freebies/city-wallpaper-5.jpg" alt="" style={{'height': '600px'}} />
                    <h3>{ item.city ? item.city : "Unknown City" }</h3> 

                    {/* <button className="btn">
                        Read More
                    </button> */}
                  
                </div>
                </Link>
           )
        }) : <p>loading...</p>
        }
        
        </div>




    
    </>
  )
}

export default allCities