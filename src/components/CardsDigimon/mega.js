import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import api from "../../services/api";

class CardsDigimon extends Component {
  state = {
    digimons: [{}],
  };

  async componentDidMount() {
    const digimons_api = await api.get("/level/mega");

    this.setState({
      digimons: digimons_api.data
    });
  };

  render() {
    
    return (
      <>
        {this.state.digimons.map((card) =>
            <Col sm={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.level}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
        )};
      </>
    )
  }
};

export default CardsDigimon;
