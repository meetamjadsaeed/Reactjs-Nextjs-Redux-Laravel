import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Tags = () => {
  const [Tags, setTags] = useState();
  // console.log(Tags);

  //get user token
  const token = user ? user.data.token : "not found";

  const getData = async () => {
    // Get Posts
    await axios
      .get("     http://127.0.0.1:8000/api/tags  ", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => setTags(result.data.data));
    //   .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="listingsWrapper">
        {Tags ? (
          Tags.map((item) => {
            return (
              <Link href={`http://localhost:3000/postswithtag/${item.tag_id}`}>
                <div className="card" style={{ minHeight: "200PX" }}>
                  <h4>{item.title}</h4>
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

export default Tags;
