import React, { useState } from "react";
import "../App.css";

import { Row, Container, Col, Card } from "react-bootstrap";
import { arraySearch } from "../components/Search";
import { digimonsChampion } from "../services/levelChampion";

export default function ChampionsPage() {
  const [digimon, setDigimons] = useState(digimonsChampion);

  console.log(digimonsChampion);

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      let search = await arraySearch(digimon, value);
      setDigimons(search);
    } else {
      setDigimons(digimonsChampion);
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
          <h1>Champion</h1>
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
