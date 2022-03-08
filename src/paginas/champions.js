import React from "react";
import "../App.css";


import { Row, Container } from "react-bootstrap";
import CardsDigimon from "../components/CardsDigimon/champion";


export default function ChampionsPage() {
  return (
    <>
   
      <Container fluid>
        <h1>Champion</h1>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
    </>
  );
}
