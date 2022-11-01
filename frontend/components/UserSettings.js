import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button";


const UserSettings = (props) => {
  
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear();
    // router.push("/");
    // router.push('/about');
    console.log("Logout completed");
  }
    console.log(props);
  return (
    <>
   <Dropdown as={ButtonGroup}>
      <Button variant="success">Profile</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Signed in as: 
        {
        props ?
        props.user.data.first_name :
        "User Not signed in"
        }
           </Dropdown.Item>
        <Dropdown.Item >
          
        <button className="btn" onClick={handleLogout}>Logout</button>
          
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </>
  )
}

export default UserSettings