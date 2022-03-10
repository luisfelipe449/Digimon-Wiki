import React, { useState } from "react";
import "../App.css";

import { Row, Container, Col, Card } from "react-bootstrap";
import { digimonsRookie } from "../Services/levelRookie";
import { arraySearch } from "../components/SearchFunction";

export default function FreshPage() {
  const [digimon, setDigimons] = useState(digimonsRookie);

  console.log(digimonsRookie);

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      let search = await arraySearch(digimon, value);
      setDigimons(search);
    } else {
      setDigimons(digimonsRookie);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search digimon here"
            onChange={handleOnChange}
          />
          <h1>Rookie</h1>
          {digimon.map((card) => (
            <Col sm={3}>
              <Card key={card.name} style={{ width: "18rem" }}>
                <Card.Img key={card.img} variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title key={card.name}>{card.name}</Card.Title>
                  <Card.Text key={card.level}>{card.level}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
