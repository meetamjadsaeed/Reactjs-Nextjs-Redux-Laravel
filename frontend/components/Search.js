import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";



const Search = () => {
  // const [Searches, setSearch] = useState();
  const [Categories, setCategories] = useState();
  const [Results, setResults] = useState();

  const [getCategory, setCategory] = useState(
    {
      id: "",
    }
  );

  // console.log("Categories", Categories);
  // const categoryID = Categories[0].category_id;
  // console.log("Categories", getCategory.id);


  const [Searches, setSearch] = useState({
    title: "",
});

// console.log("type",typeof(Searches.title))

const handleSubmit = () => {
  // e.preventDefault();
      axios.get(`http://127.0.0.1:8000/api/postssearch/${Searches.title}/6`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
          },
        })
        .then((result) => setResults(result.data.data))
        // .then((result) => console.log("searches", result))
      .catch((err) => console.error(err));
};



  const getData = async () => {
    // Get Posts
    await axios
      .get("      http://127.0.0.1:8000/api/categories  ", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNzRkYTQ3YjRkZWVlZmQzMTQwOGYxODQ1M2MzMmRlNmZmYTI1ZTQ4ZmMzN2MzMWMyOGEwMzljZWRlMDMwODllZTA1ZWM2ZGMzZWVjMGIiLCJpYXQiOjE2NjUzMzIxNDUuMzk0MTM2LCJuYmYiOjE2NjUzMzIxNDUuMzk0MTQzLCJleHAiOjE2OTY4NjgxNDUuMzg2NjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.soK3Hk6-oke4tpTujJAKyaRiG2jNx4bBwr05qQFNGYE4NawQON2QLTO6jbyzgVHDWu68QOsstQ_tbjyndzfvdyE7ePgyKgN6t4yuPLphMlE9PTXjAX4Rp1m-7W7gi4fkXs9AygfT8FH6RayZaoykDC_TaUM5DT5bJ1KsHOlEPzI2e4deBbualJfVRMPIL--ZDDAZEVjwCbDu2j9izX3kWTv3ZYseUKMWNcNh-F4xmjtZL0Cxo2TtehWUdS8b44zUAD3dsDIWBYP89ZgzsgITr2nuWVXEYulsFBiMQroliC-xr4g5AHzML6PxbK55jR5nTa7ow56UiDzA6QrFCWM58MNe6ZDKVClxk77QKCkOAhX5nH0cRTGf5ALCWnm10w0YmcH_ROh1EaEi0UQMK69S27KofMO4Giq1Qh3-j86mXnAANTD036B8GxBVWa_s86ALHLR6ZueGADyQOCStEOVgkaHShSxN2DFU0WN_RvudQmOxgGc0ulXem-qM0dikSm5AD2h-2QsCqzjcOU88hjk2KhDDsCgCbrD_bGNxhtFLJUWN9owvhRPxPeieq4hkfMbPKyITE6MEO7A9dQ4jvasnegpReR3kTmyAhCI2sjgQUfBwalYDQVVwfg88gHqzDPxdlxGOWfSpMF9rrRS2B8dNQnGcp7_dbOa9yCa-kMFALbg",
        },
      })
      .then((result) => setCategories(result.data.data));
      // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);




  return (
    <>
  
  <section id="hero ">
  
<div class="searchwrapper">
      <div class="searchbox">
        <div class="row">
          <div class="col-md-5"><input type="text" class="form-control" placeholder="Search by Keywords..." 
           onChange={(e) => setSearch({ ...Searches, title: e.target.value })}
          /> 
          </div>
          <div class="col-md-3"><input type="text" class="form-control" placeholder="Location" /></div>
          <div class="col-md-3">
            <select class="form-control category">
          
            { Categories ? 
  Categories.map((item)=>{
    return (
    <option value={item.category_id} 
    // onChange={(e) => setCategory({id: e.target.value })}
  
    
    >
                
    {item.category_title}
    
    
    
    </option>


    )
  }) : <p>loading...</p>
  }


             
            </select>
          </div>
          <div class="col-md-1">
            <input type="button" class="btn btn-primary" className="form-control" value="Search" 
          onClick={handleSubmit()}
          /></div>
        </div>
      </div>
    </div>
    <div className="listingsWrapper">

{Results ? <h2 style={{'textAlign':'center'}}>Based On Search</h2> : ""}
    
    
    
    { Results ? 
  Results.map((item)=>{
    return (

      <Link href={`http://localhost:3000/posts/${item.post_id}`}>
      <div className="card" style={{'minHeight':'200PX'}}>
        <h4>{item.post_title}</h4>
    </div>
      </Link>
   

)
}) : null
}

</div>
</section>



  
    </>
  
  )
}

export default Search
