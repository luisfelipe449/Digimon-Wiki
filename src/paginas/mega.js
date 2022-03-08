import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/mega";


export default function MegaPage() {
  return (
    <>
   
      <Container fluid>
        <h1>Mega</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
