import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link"; 
// import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import UserSettings from "./UserSettings";
import { useSelector, useDispatch } from 'react-redux'
// import { setUser} from '../store/profileSlice.js'
// import { getUser } from "../store/profileSlice.js";
// import { STATUSES } from '../store/profileSlice.js';
import { fetchCategories } from "../store/categoriesSlice.js";
import { STATUSES } from "../store//categoriesSlice.js";
import { useRouter } from 'next/router'
import Oath from "./Oath";


export default function MainNav() {
  const [user, setUser] = useState()

  // const count = useSelector((state) => state.profile);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.category);


// console.log(count);
// console.log(dispatch(setUser()));

  // const handleLogout = () => {
  //   setUser({});
  //   setUsername("");
  //   setPassword("");
  //   localStorage.clear();

  // };

  
// console.log(user);
// console.log(localStorage);

  useEffect(() => {
  dispatch(fetchCategories());
    console.log(data);
    console.log("sdsds");

    // dispatch(getUser());
    // console.log(dispatch(getUser()));
    // console.log(profiles);
    // console.log( dispatch(setUser()))
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
  }, []);


//   const isAuthenticated = () => {
//     if (typeof window == 'undefined') {
//         return false;
//     }

//     if (localStorage.getItem('token')) {
//         // return setUser(JSON.parse(localStorage.getItem('token')));
//         return setUser(true);
//     } else {
//         return false;
//     }
// };



  return (
    <>

    {/* <p>Navbar</p> */}

    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
        <img className="logo" src="assets/images/logo.png" alt="Your Name" />
        </Navbar.Brand>
        <Nav className="me-auto">
          
          <div className="navLinks">

          <Link href="/">    
        <a>Home
          {/* {setUser} */}
        </a>
          </Link>
          {/* <span>{count}</span> */}
         {/* <Button onClick={() => dispatch(setUser())}></Button> */}

          <Link href="/about">    
        <a>About</a>
          </Link>

          <Link href="/packages">    
        <a>Packages</a>
          </Link>

          <Link href="/posts">    
        <a>All Listings</a>
          </Link>

          <Link href="/allCategories">    
        <a>Categories</a>
          </Link>


          <Link href="/allTags">    
        <a>Tags</a>
          </Link>


          <Link href="/authors">    
        <a>Users</a>
          </Link>

          <Link href="/post">    
        <a>Post An Ad</a>
          </Link>

          <Link href="/package">    
        <a>Post An Package</a>
          </Link>

         
         

          </div>
          
     
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <input type="text" class="search-hover" name="" placeholder="search here..." />
       


      {

            user ?
            (<UserSettings user={user} />)  :
           (
           
          //  <Link href={"../login"}>
          //  <button className="btn">Login</button>
          //  </Link>

              <Oath />
           )
           }

      

         

        </Navbar.Collapse>
      </Container>
    </Navbar>


    

      {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="p-4">
            <img className="logo" src="assets/images/logo.png" alt="Your Name" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Featured</Nav.Link>
              <Nav.Link href="#link">Packages</Nav.Link>
              <Nav.Link href="#link">Posts</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">Tags</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="navright">
            <Form.Control
              className="w-25 navSearch"
              placeholder="Saved Search "
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>ICON</p>
            <Button  variant="primary">Login</Button>
          </div>
        </Container>
      </Navbar> */}
    </>
  );
}
