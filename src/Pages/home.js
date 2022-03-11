import React, { useEffect, useState } from "react";
import "../App.css";

import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { arr } from "../Services/digimonsAll";


export default function HomePage() {
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

  const [itensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(digimon.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const digimons = digimon.slice(startIndex, endIndex);

  if(search === digimons){
    setCurrentPage(0)
  }

  return (
    <>
      <Container fluid>
        <Row>
        <h1>Digimons</h1>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search digimon here"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <div>
            {Array.from(Array(pages), (item, index) => {
              return (
                <Button
                  size="lg"
                  variant="outline-primary"
                  value={index}
                  onClick={(e) => setCurrentPage(Number(e.target.value))}
                >
                  {index + 1}
                </Button>
              );
            })}
          </div>
          {digimons.map((card) => (
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
