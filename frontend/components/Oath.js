import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Oath = () => {
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Button variant="success">Create</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link href="/login">
              <button className="btn">Login</button>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/register">
              <button className="btn">Register</button>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Oath;
