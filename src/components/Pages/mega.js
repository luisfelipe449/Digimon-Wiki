import React, { useState } from "react";
import "../App.css";

import { Row, Container, Col, Card } from "react-bootstrap";
import { digimonsMega } from "../services/levelMega";
import { arraySearch } from "../components/Search";

export default function FreshPage() {
  const [digimon, setDigimons] = useState(digimonsMega);

  console.log(digimonsMega);

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      let search = await arraySearch(digimon, value);
      setDigimons(search);
    } else {
      setDigimons(digimonsMega);
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
          <h1>Mega</h1>
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
