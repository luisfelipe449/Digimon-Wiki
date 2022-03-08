import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/rookie";


export default function RookiePage() {
  return (
    <>
   
      <Container fluid>
        <h1>Rookie</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
