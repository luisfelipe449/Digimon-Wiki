import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/ultimate";


export default function UltimatePage() {
  return (
    <>
   
      <Container fluid>
        <h1>Ultimate</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
