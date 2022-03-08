import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/fresh";


export default function FreshPage() {
  return (
    <>
   
      <Container fluid>
        <h1>Fresh</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
