import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SelectionPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1> Gwent Card Game </h1>
        </div>
        <div className="SelectionOptions">
          <div className="SelectionDropdown">
            <label for="SelectionDropdown">Base Deck</label><br/>
            <select>
              <option value="northern">Northern Realms</option>
              <option value="nilfgaard">Nilfgaardian Empire</option>
              <option value="monsters">Monsters</option>
              <option value="scoiatael">Scoia'Tael</option>
            </select>
          </div>
        </div>
        <div className="BaseDeckChoicesAndStats">
        </div>
        <div className="NeutralDeckChoices">
        </div>
      </div>
    );
  }
}

export default SelectionPage;
