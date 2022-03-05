import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/Digimon_Wiki_logo.svg.png';



import {Navbar,Nav,Form,FormControl,Button, Container, NavbarBrand} from 'react-bootstrap'

function NavBar() {

    return (
      <nav>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <img src={logo} alt="logo" id="navbarLogo"/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
        <NavbarBrand
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <div class="menu">
            <Nav.Link href="#action1">Fresh</Nav.Link>
            <Nav.Link href="#action1">In training</Nav.Link>
            <Nav.Link href="#action2">Rookie</Nav.Link>
            <Nav.Link href="#action3">Champion</Nav.Link>
            <Nav.Link href="#action3">Ultimate</Nav.Link>
            <Nav.Link href="#action3">Mega</Nav.Link>
          </div>
        </NavbarBrand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
}

export default NavBar;