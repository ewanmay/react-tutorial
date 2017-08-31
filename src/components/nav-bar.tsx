
import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default function NavBar(user: string) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/home">Tweeter</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/home">
          Home
        </NavItem>
        <NavItem eventKey={2} href={"/profile/" + user}>
          Profile
        </NavItem>
      </Nav>
    </Navbar>
  );
}
