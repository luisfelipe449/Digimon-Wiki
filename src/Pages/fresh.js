import React, { useEffect, useState } from "react";
import "../App.css";

import { Row, Container, Col, Card } from "react-bootstrap";
import { arr } from "../Services/levelFresh";


export default function FreshPage() {

  const [search, setsearch] = useState("");
  const [digimon, setdigimon] = useState(arr);
  
  useEffect(() => {
    if (search === "") {
      setdigimon(arr);
    }
    if (search !== "") {
      setdigimon(
        arr.filter((bl) => {
          let name = bl.name.toLowerCase();
          console.log(search);
          return name.includes(search.toLowerCase());
        })
      );
    }
  }, [search]);


  return (
    <>
      <Container fluid>
        <Row>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search digimon here"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <h1>Fresh</h1>
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
