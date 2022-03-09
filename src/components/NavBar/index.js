import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/Digimon_Wiki_logo.svg.png';

import {Navbar,Nav,Form,FormControl,Button, Container, NavbarBrand} from 'react-bootstrap'



export default function NavBar() {

    return (
      <nav>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Nav.Link href="/"><img src={logo} alt="logo" id="navbarLogo"/></Nav.Link>
            <Navbar.Toggle aria-controls="navbarscroll" />
            <Navbar.Collapse id="navbarscroll">
        <NavbarBrand
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <div className="menu">
            <Nav.Link href="fresh">Fresh</Nav.Link>
            <Nav.Link href="intraining">In training</Nav.Link>
            <Nav.Link href="rookies">Rookie</Nav.Link>
            <Nav.Link href="champions">Champion</Nav.Link>
            <Nav.Link href="ultimate">Ultimate</Nav.Link>
            <Nav.Link href="mega">Mega</Nav.Link>
          </div>
        </NavbarBrand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
}

