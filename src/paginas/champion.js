import React from "react";
import "../App.css";

import CardsDigimon from "../components/CardsDigimon";

import { Row, Container } from "react-bootstrap";

export default function ChampionsPage() {
  return (
    <>
   
      <Container fluid>
        <h1>Champions</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
