import React, { Component, PropTypes } from 'react';
import DeckSelectionOptions from './DeckSelectionOptions.jsx'
import DeckChoices from './DeckChoices.jsx'
import LeaderChoice from './LeaderChoice.jsx'
import LeaderChoiceSelection from './LeaderChoiceSelection.jsx'
import DeckStats from './DeckStats.jsx'
import { connect } from 'react-redux'; 
import store from '../Store/Store.js';
import { deckCardClick, toggleLeaderSelection, handleLeaderClick, handleBaseDeckSelection, baseDeckFilterSelection, neutralDeckFilterSelection, finalizeDeck} from '../Actions/DeckSelectionPageActions.js';
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
            path="cards/"
          />
        </div>
        <div className="DeckChoicesAndStats">
          <div className={this.props.baseDeck === "" ? "NotDisplayed":"TableTopMargin"}>
            <div className="FiltersDiv">
              <img className="FilterIcon" src="icons/Melee.png" onClick={()=>this.props.onBaseFilterClick('Melee')}/>
              <img className="FilterIcon" src="icons/Ranged.png" onClick={()=>this.props.onBaseFilterClick('Ranged')}/>
              <img className="FilterIcon" src="icons/Siege.png" onClick={()=>this.props.onBaseFilterClick('Siege')}/>
              <img className="FilterIcon" src="icons/Deck.png" onClick={()=>this.props.onBaseFilterClick('All')}/>
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
                path="cards/"
              />
              <DeckStats 
                totalCards={this.props.totalCards} 
                totalUnitCards={this.props.totalUnitCards} 
                totalSpecialCards={this.props.totalSpecialCards} 
                totalCardStrength={this.props.totalCardStrength} 
                totalHeroCards={this.props.totalHeroCards}
                unitMinimum={this.props.unitMinimum}
                specialLimit={this.props.specialLimit}
              />
            </div>
          </div>
          <div className={this.props.baseDeck === "" ? "NotDisplayed":"TableTopMargin"}>
            <div className="FiltersDiv">
              <img className="FilterIcon" src="icons/Melee.png" onClick={()=>this.props.onNeutralFilterClick('Melee')}/>
              <img className="FilterIcon" src="icons/Ranged.png" onClick={()=>this.props.onNeutralFilterClick('Ranged')}/>
              <img className="FilterIcon" src="icons/Siege.png" onClick={()=>this.props.onNeutralFilterClick('Siege')}/>
              <img className="FilterIcon" src="icons/Deck.png" onClick={()=>this.props.onNeutralFilterClick('All')}/>
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
      baseDeck: store.deckSelectionPageReducers.baseDeckState.baseDeck,
      baseDeckFullName: store.deckSelectionPageReducers.baseDeckState.baseDeckFullName,
      baseDeckCards: store.deckSelectionPageReducers.baseDeckState.baseDeckCards,
      neutralDeckCards: store.deckSelectionPageReducers.baseDeckState.neutralDeckCards,
      baseDeckFilter: store.deckSelectionPageReducers.baseDeckState.baseDeckFilter,
      neutralDeckFilter: store.deckSelectionPageReducers.baseDeckState.neutralDeckFilter,
      leaderChoice: store.deckSelectionPageReducers.leaderDeckState.leaderChoice,
      leaderCards: store.deckSelectionPageReducers.leaderDeckState.leaderCards,
      showLeaderSelection: store.deckSelectionPageReducers.leaderDeckState.showLeaderSelection,
      totalCards: store.deckSelectionPageReducers.deckStatsState.totalCards,
      totalUnitCards: store.deckSelectionPageReducers.deckStatsState.totalUnitCards,
      totalSpecialCards: store.deckSelectionPageReducers.deckStatsState.totalSpecialCards,
      totalCardStrength: store.deckSelectionPageReducers.deckStatsState.totalCardStrength,
      totalHeroCards: store.deckSelectionPageReducers.deckStatsState.totalHeroCards,
      unitMinimum: store.deckSelectionPageReducers.deckStatsState.unitMinimum,
      specialLimit: store.deckSelectionPageReducers.deckStatsState.specialLimit        
  }
}

const mapDispatchToProps = function(dispatch){
  console.log(store.getState());
  return{
      onDeckSelectionChange: (deckName) => {
        dispatch(handleBaseDeckSelection(deckName, dispatch));
      },
      onLeaderClick: (id) => {
        dispatch(handleLeaderClick(id, store.getState().deckSelectionPageReducers.leaderDeckState, dispatch));
      },
      toggleLeaderSelection: () => {
        dispatch(toggleLeaderSelection(store.getState().deckSelectionPageReducers.leaderDeckState));
      },
      onDeckCardClick: (id, checked) => {
        dispatch(deckCardClick(id, checked, store.getState().deckSelectionPageReducers, dispatch));
      },
      onBaseFilterClick: (filter) => {
        dispatch(baseDeckFilterSelection(filter));
      },
      onNeutralFilterClick: (filter) => {
        dispatch(neutralDeckFilterSelection(filter));
      },
      onGenerateDeckClick: () => {
        dispatch(finalizeDeck(store.getState().deckSelectionPageReducers, dispatch));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelectionPage);