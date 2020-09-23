import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Users List</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-info" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
