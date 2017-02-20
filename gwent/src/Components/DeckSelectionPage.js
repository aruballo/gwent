import React, { Component, PropTypes } from 'react';
import DeckSelectionOptions from './DeckSelectionOptions.js'
import DeckChoices from './DeckChoices.js'
import LeaderChoice from './LeaderChoice.js'
import DeckStats from './DeckStats.js'
import '../Styles/DeckSelectionPage.css';
import '../Styles/index.css';


class DeckSelectionPage extends Component {
  render(){
    return(
      <div className="App">
        
        <div className="DeckSelectionOptionsParent">
          <DeckSelectionOptions 
            onChange={this.props.onDeckSelectionChange} 
            value={this.props.baseDeck}
          />
          <button 
            onClick={this.props.onGenerateDeckClick} className={this.props.baseDeck === "" ? "NotDisplayed":""}> Finalize Deck! </button>
        </div>
        <div className={this.props.baseDeck === "" ? "DeckChoicesAndStats NotDisplayed":"DeckChoicesAndStats"}>
          <div>
            <DeckChoices 
              label={this.props.baseDeckFullName} 
              deckCards={this.props.baseDeckCards} 
              onRowClick={this.props.onDeckCardClick} 
              rowHeight={275} 
              maxHeight={700} 
              width={660}
              cellWidth={160}
              numberOfColumns={4}
            />
          </div>
          <div className="DeckLeaderAndStats">
            <LeaderChoice 
              leader={this.props.leaderChoice}
              path="/cards/"
            />
            <DeckStats 
              totalCards={this.props.totalCards} 
              totalUnitCards={this.props.totalUnitCards} 
              totalSpecialCards={this.props.totalSpecialCards} 
              totalCardStrength={this.props.totalCardStrength} 
              totalHeroCards={this.props.totalHeroCards}
            />
          </div>
          <DeckChoices 
            label="Neutral Deck" 
            deckCards={this.props.neutralDeckCards} 
            onRowClick={this.props.onDeckCardClick} 
            rowHeight={275} 
            maxHeight={700} 
            width={660} 
            cellWidth={160}
            numberOfColumns={4}
          />
        </div>
      </div>
    )
  }
}

export default DeckSelectionPage;