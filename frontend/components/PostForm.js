import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const PostForm = (props) => {
    const [postDetails, setPost] = useState({
        tittle: "",
        content: "",
        author_id: "",
        category_id: "",
    });
    
    // console.log(user);
    
    const post = {
      tittle: postDetails.tittle,
      content: postDetails.content,
      author_id: Number(postDetails.author_id),
      category_id: Number(postDetails.category_id),
    };
    
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };
    
    fetch('http://127.0.0.1:8000/api/posts', requestOptions)
            .then(response => response.json());
    
    
      // console.log(typeof(post.tittle))
      // console.log(typeof(post.content))
      // console.log(typeof(post.author_id))
      // console.log(typeof(post.category_id))
    
      // console.log(post.tittle);
      // console.log(post.content);
      // console.log(post.author_id);
      // console.log(post.category_id);
      
      // var formData = new FormData();
      // formData.append('tittle', postDetails.tittle);
      // formData.append('content', postDetails.content);
      // formData.append('author_id', postDetails.author_id);
      // formData.append('category_id', postDetails.category_id);
    
    
      // const options = {
      //   url: 'http://127.0.0.1:8000/api/posts',
      //   method: 'POST',
      //   // headers: {
      //   //   'Content-Type': 'application/x-www-form-urlencoded',
      //   //   'crossDomain': true
      //   // },
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'crossDomain': true
    
      //   },
      //   post
      // };
    
      // axios(options)
      // .then(response => {
      //   console.log("sucessfully");
      //   console.log(response.status);
      // });
    
    
    
      // axios.post("  http://127.0.0.1:8000/api/posts",post)
      //     .then((res) => {
      //         console.log("Successfully new post added");
      //         console.log(res);
      //         // navigate("http://localhost:3000/");
      //     })
      //     .catch((err) => console.error(err));
    
      // const url = "http://127.0.0.1:8000/api/posts";
      // const options = {
      //   method: 'POST',
      //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
      //   data: qs.stringify(post),
      //   url,
      // };
      // axios(options)
      // .then(response => {
      //   console.log("sucessfully");
      //   console.log(response.status);
      // });
      // console.log("erorr");
    
      // axios.post('http://127.0.0.1:8000/api/posts', qs.stringify(post));
      
    //   const params = new URLSearchParams();
    // params.append('param1', post.tittle);
    // params.append('param2', post.content);
    // params.append('param2', post.author_id);
    // params.append('param2', post.category_id);
    
    
    //   axios({
    //     method: 'post',
    //     url: 'http://127.0.0.1:8000/api/posts',
    //     data: params,
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' }
    // })
    // .then(function (response) {
    //     console.log("Sucessfully added");
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    
    
          
    };
    
  
  
    return (
    <>
    <div className="container">
        <h2 style={{"text-align": "center"}}>Post An new Ad</h2>
  <div className="row">
    <div className="col-8">
      <form  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col form-group">
            <input type="text" className="form-control" placeholder="Tittle" 
            onChange={(e) => setPost({ ...postDetails, tittle: e.target.value })}
            />
          </div>
          {/* <div className="col form-group">
            <input type="text" className="form-control" placeholder="Last name" />
          </div> */}
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 form-group">
            {/* <input type="text" className="form-control" placeholder="Content" /> */}
            {/* <textarea class="form-control" id="exampleFormControlTextarea3" rows="7" placeholder="Content"
            onChange={(e) => setPost({ ...postDetails, content: e.target.value })}
            ></textarea> */}
             <input type="text" className="form-control" placeholder="Content" 
            onChange={(e) => setPost({ ...postDetails, content: e.target.value })}
            />
          </div>            
           {/* <div className="col-sm-12 col-md-4 form-group">
            <input type="text" className="form-control" placeholder="Zipcode" />
          </div>  
          <div className="col-sm-12 col-md-4 form-group">
            <input type="text" className="form-control" placeholder="Country" />
          </div> */}
        </div>
        <div className="row">
          <div className="col form-group">
            <input type="text" className="form-control" placeholder="Author ID" disabled
            onChange={(e) => setPost({ ...postDetails, author_id: e.target.value })}
            />
          </div>

          <div className="col form-group">
            <input type="text" className="form-control" placeholder="Category ID" disabled
            onChange={(e) => setPost({ ...postDetails, category_id: e.target.value })}
            />
          </div>

          {/* <div className="col form-group">
            <input type="text" className="form-control" placeholder="Last name" />
          </div> */}
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
</div>
    

    
    </>
    
  )
}

export default PostForm