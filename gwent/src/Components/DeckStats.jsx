import React, { Component, PropTypes } from 'react';
import '../Styles/DeckStats.css';
import '../Styles/index.css';

class DeckStats extends Component {
  render(){
    return(
      <div className="DeckStats">
        <div>
          <h3> Total Cards in Deck </h3>
          <span>{this.props.totalCards}</span>
        </div>
        <div>
          <h3> Number of Unit Cards </h3>
          <span>{this.props.totalUnitCards}</span>
        </div>
        <div>
          <h3> Special Cards </h3>
          <span>{this.props.totalSpecialCards}</span>
        </div>
        <div>
          <h3> Total Unit Strength </h3>
          <span>{this.props.totalCardStrength}</span>
        </div>
        <div>
          <h3> Hero Cards </h3>
          <span>{this.props.totalHeroCards}</span>
        </div>
      </div>
    )
  }
}

export default DeckStats;