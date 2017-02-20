import React, { Component, PropTypes } from 'react';
import '../Styles/DeckSelectionOptions.css';
import '../Styles/index.css';

class DeckSelectionOptions extends Component {
  render(){
    return(
      <div className="DeckSelectionOptions">
        <h2>Select a Deck</h2>
        <div>
          <img 
            src="TemerianDeck.png" 
            className={this.props.value === "northern" ? "DeckChoiceImageHighlight" : "DeckChoiceImage"} 
            onClick={() => this.props.onChange("northern")}
          />
          <img 
            src="NilfgaardianDeck.png" 
            className={this.props.value === "nilfgaard" ? "DeckChoiceImageHighlight" : "DeckChoiceImage"} 
            onClick={() => this.props.onChange("nilfgaard")}
          />
          <img 
            src="MonstersDeck.png" 
            className={this.props.value === "monsters" ? "DeckChoiceImageHighlight" : "DeckChoiceImage"} 
            onClick={() => this.props.onChange("monsters")}
          />
          <img 
            src="ScoiataelDeck.png" 
            className={this.props.value === "scoiatael" ? "DeckChoiceImageHighlight" : "DeckChoiceImage"} 
            onClick={() => this.props.onChange("scoiatael")}
          />
        </div>
      </div>
    );
  }
}

export default DeckSelectionOptions;