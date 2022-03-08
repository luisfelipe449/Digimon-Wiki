import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/intraining";


export default function InTrainingPage() {
  return (
    <>
   
      <Container fluid>
        <h1>In Training</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
