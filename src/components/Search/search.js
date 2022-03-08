import React, { Component, useState } from "react";
import api from "../../services/api";



export default class DigimonSearch extends Component {
  state = {
    digimons: [{

    }],
  };

  async componentDidMount() {
    const digimons_api = await api.get("/digimon");

    this.setState({
      digimons: digimons_api.data,
    });
  }
  


  render() {
    
    return (
        
      
            <div>
                <input type="text" 
                />
            </div>>
            <div>
            <ul>
           
                {this.state.digimons.map((card) => (
            
                <li>
                    {card.nome}
                </li>
                ))}
            </ul>
            </div>
            
        )
    };
    
    
  }