import React, { Component, PropTypes } from 'react';
import DeckSelectionOptions from './DeckSelectionOptions.jsx'
import DeckChoices from './DeckChoices.jsx'
import LeaderChoice from './LeaderChoice.jsx'
import LeaderChoiceSelection from './LeaderChoiceSelection.jsx'
import DeckStats from './DeckStats.jsx'
import { connect } from 'react-redux'; 
import store from '../Store/Store.js';
import { deckCardClick, toggleLeaderSelection, handleLeaderClick, handleBaseDeckSelection, baseDeckFilterSelection, neutralDeckFilterSelection} from '../Actions/DeckSelectionPageActions.js';
import '../Styles/DeckSelectionPage.css';
import '../Styles/index.css';


class DeckSelectionPage extends Component {
  render(){
    return(
      <div className="App">
        <div className={this.props.showLeaderSelection === true ? "" : "NotDisplayed"}>
          <LeaderChoiceSelection
            leaders={this.props.leaderCards}
            onClick={this.props.onLeaderClick}
            path="/cards/"
          />
        </div>
        <div className="DeckChoicesAndStats">
          <div className={this.props.baseDeck === "" ? "NotDisplayed":"TableTopMargin"}>
            <div className="FiltersDiv">
              <img className="FilterIcon" src="/icons/Melee.png" onClick={()=>this.props.onBaseFilterClick('Melee')}/>
              <img className="FilterIcon" src="/icons/Ranged.png" onClick={()=>this.props.onBaseFilterClick('Ranged')}/>
              <img className="FilterIcon" src="/icons/Siege.png" onClick={()=>this.props.onBaseFilterClick('Siege')}/>
              <img className="FilterIcon" src="/icons/Deck.png" onClick={()=>this.props.onBaseFilterClick('All')}/>
            </div>
            <DeckChoices 
              label={this.props.baseDeckFullName} 
              deckCards={this.props.baseDeckCards} 
              onRowClick={this.props.onDeckCardClick} 
              rowHeight={275} 
              maxHeight={800} 
              width={660}
              cellWidth={160}
              numberOfColumns={4}
              filter={this.props.baseDeckFilter}
            />
          </div>
          <div>
            <div className="DeckSelectionOptionsParent">
              <DeckSelectionOptions 
                onChange={this.props.onDeckSelectionChange} 
                value={this.props.baseDeck}
              />
              <button 
                onClick={this.props.onGenerateDeckClick} 
                className={this.props.baseDeck === "" ? "NotDisplayed":"FinalizeDeckButton"}
              > Finalize Deck! </button>
            </div>
            <div className={this.props.baseDeck === "" ? "DeckLeaderAndStats NotDisplayed":"DeckLeaderAndStats"}>
              <LeaderChoice 
                leader={this.props.leaderChoice}
                onClick={this.props.toggleLeaderSelection}
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
          </div>
          <div className={this.props.baseDeck === "" ? "NotDisplayed":"TableTopMargin"}>
            <div className="FiltersDiv">
              <img className="FilterIcon" src="/icons/Melee.png" onClick={()=>this.props.onNeutralFilterClick('Melee')}/>
              <img className="FilterIcon" src="/icons/Ranged.png" onClick={()=>this.props.onNeutralFilterClick('Ranged')}/>
              <img className="FilterIcon" src="/icons/Siege.png" onClick={()=>this.props.onNeutralFilterClick('Siege')}/>
              <img className="FilterIcon" src="/icons/Deck.png" onClick={()=>this.props.onNeutralFilterClick('All')}/>
            </div>
            <DeckChoices 
              label="Neutral Deck" 
              deckCards={this.props.neutralDeckCards} 
              onRowClick={this.props.onDeckCardClick} 
              rowHeight={275} 
              maxHeight={800} 
              width={660} 
              cellWidth={160}
              numberOfColumns={4}
              filter={this.props.neutralDeckFilter}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store){
  return {
      baseDeck: store.baseDeckState.baseDeck,
      baseDeckFullName: store.baseDeckState.baseDeckFullName,
      baseDeckCards: store.baseDeckState.baseDeckCards,
      neutralDeckCards: store.baseDeckState.neutralDeckCards,
      baseDeckFilter: store.baseDeckState.baseDeckFilter,
      neutralDeckFilter: store.baseDeckState.neutralDeckFilter,
      leaderChoice: store.leaderDeckState.leaderChoice,
      leaderCards: store.leaderDeckState.leaderCards,
      showLeaderSelection: store.leaderDeckState.showLeaderSelection,
      totalCards: store.deckStatsState.totalCards,
      totalUnitCards: store.deckStatsState.totalUnitCards,
      totalSpecialCards: store.deckStatsState.totalSpecialCards,
      totalCardStrength: store.deckStatsState.totalCardStrength,
      totalHeroCards: store.deckStatsState.totalHeroCards          
  }
}

const mapDispatchToProps = function(dispatch){
  return{
      onDeckSelectionChange: (deckName) => {
        dispatch(handleBaseDeckSelection(deckName, dispatch));
      },
      onLeaderClick: (id) => {
        dispatch(handleLeaderClick(id, store.getState().leaderDeckState, dispatch))
      },
      toggleLeaderSelection: () => {
        dispatch(toggleLeaderSelection(store.getState().leaderDeckState));
      },
      onDeckCardClick: (id, checked) => {
        dispatch(deckCardClick(id, checked, store.getState(), dispatch));
      },
      onBaseFilterClick: (filter) => {
        dispatch(baseDeckFilterSelection(filter));
      },
      onNeutralFilterClick: (filter) => {
        dispatch(neutralDeckFilterSelection(filter));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelectionPage);