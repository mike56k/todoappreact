import React from "react";

import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
export const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Почти канвас</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">О проекте</Nav.Link>
          <Nav.Link href="/more">Еще</Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="outline-success"
            onClick={() => window.open("https://t.me/funnyreal_bot")}
          >
            Telegram Bot
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
