import React, { Component } from 'react';
import '../node_modules/fixed-data-table/dist/fixed-data-table.css'
import './SelectionPage.css';
import './index.css';
import  gwentClasses from './classes.js';
import  gwentCards from './deckCards.js';
import Perf from 'react-addons-perf';
import {Table, Column, Cell} from 'fixed-data-table';

class DeckSelectionPageContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseDeck: "",
      baseDeckFullName: "",
      baseDeckCards: [],
      neutralDeckCards: [],
      leaderChoice: [],
      leaderCards: [],
      totalCards: 0,
      totalUnitCards: 0,
      totalSpecialCards: 0,
      totalCardStrength: 0,
      totalHeroCards: 0
    };

    this.handleBaseDeckSelection = this.handleBaseDeckSelection.bind(this);
    this.handleDeckCardClick = this.handleDeckCardClick.bind(this);
    this.handleLeaderClick = this.handleLeaderClick.bind(this);
    this.addCardToDeckArray = this.addCardToDeckArray.bind(this);
    this.handleGenerateDeckClick = this.handleGenerateDeckClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState !== this.state){
      return true;
    }
    return false;
  }

  handleDeckCardClick(id, checked){

    // Neutral Cards start at ID value of
    // 166 and end at 196
    let deckType; 
    let stateObject = {};

    if(id >= 166 && id < 197){
      deckType = "neutralDeckCards"
    }
    else{
      deckType = "baseDeckCards";
    }
    
    let cardIndex = this.state[deckType].findIndex((el)=>{
      return el.id === id;
    });


    const cards = this.state[deckType].slice();
    cards[cardIndex].checked = checked;
    stateObject[deckType] = cards;

    this.updateDeckStats(cards[cardIndex]);
    this.setState(stateObject);
  }

  handleLeaderClick(id){
    const cards = this.state.leaderCards.slice();
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id === id){
        cards[i].checked = true;
      }
      else{
        cards[i].checked = false;
      }
    }

    this.setState({
      leaderCards: cards
    });
  }

  updateDeckStats(card){
    let stateObject = {};
    let incrementValue = 0;
    let cardScore = card.score;

    if(card.checked === false  ){
      incrementValue = -1;
      cardScore *= -1;
    }
    else{
      incrementValue = 1; 
    }

    stateObject["totalCards"] = this.state.totalCards + incrementValue;

    if(card.type === "CombatCard"){
      stateObject["totalUnitCards"] = this.state.totalUnitCards + incrementValue;
      stateObject["totalCardStrength"] = this.state.totalCardStrength + cardScore;

      if(card.ability.toLowerCase().indexOf("hero") > -1){
        stateObject["totalHeroCards"] = this.state.totalHeroCards + incrementValue;
      }
    }
    else if(card.type === "SpecialCard" || card.type === "WeatherCard"){
      stateObject["totalSpecialCards"] = this.state.totalSpecialCards + incrementValue;
    }

    this.setState(stateObject);
  }

  addCardToDeckArray(card, deckArray, defaultCheckedValue){
      let newCard = card;
      newCard.checked = defaultCheckedValue;
      newCard.key = newCard.id;
      deckArray.push(newCard);
  }

  handleBaseDeckSelection(chosenDeck){
    this.setState((prevState, props) => {

      let deckName = "";
      let leaderCards = [];
      let baseCards = [];
      let neutralCards = [];
      let leaderType = "";
      let cardType = "";
      let statsType = "";
      let stats = {};

      if(chosenDeck === "northern"){
        deckName = "Northern Realms";
        leaderType = "northernLeaders";
        cardType = "northernCards";
        statsType = "northernStats";
      }
      else if(chosenDeck === "nilfgaard"){
        deckName = "Nilfgaardian Empire";
        leaderType = "nilfgaardLeaders";
        cardType = "nilfgaardCards";
        statsType = "nilfgaardStats";
      }
      else if(chosenDeck === "monsters"){
        deckName = "Monsters";
        leaderType = "monstersLeaders";
        cardType = "monstersCards";
        statsType = "monstersStats";
      }
      else if(chosenDeck === "scoiatael"){
        deckName = "Scoia'tael";
        leaderType = "scoiataelLeaders";
        cardType = "scoiataelCards";
        statsType = "scoiataelStats";
      }

      gwentCards[leaderType].map((object)=> this.addCardToDeckArray(object, leaderCards, false));
      gwentCards[cardType].map((object) => this.addCardToDeckArray(object, baseCards, true));
      gwentCards.neutralCards.map((object) => this.addCardToDeckArray(object, neutralCards, true));

      //Choose a default leader
      leaderCards[0].checked = true;

      stats.totalCards = gwentCards[statsType].totalCards + gwentCards.neutralStats.totalCards;
      stats.totalUnitCards = gwentCards[statsType].totalUnitCards + gwentCards.neutralStats.totalUnitCards;
      stats.totalSpecialCards = gwentCards[statsType].totalSpecialCards + gwentCards.neutralStats.totalSpecialCards;
      stats.totalCardStrength = gwentCards[statsType].totalCardStrength + gwentCards.neutralStats.totalCardStrength;
      stats.totalHeroCards = gwentCards[statsType].totalHeroCards + gwentCards.neutralStats.totalHeroCards;

      return {
        baseDeck: chosenDeck,
        baseDeckFullName: deckName,
        baseDeckCards: baseCards,
        leaderCards: leaderCards,
        leaderChoice: leaderCards[0],
        neutralDeckCards: neutralCards,
        totalCards: stats.totalCards,
        totalUnitCards: stats.totalUnitCards,
        totalSpecialCards: stats.totalSpecialCards,
        totalCardStrength: stats.totalCardStrength,
        totalHeroCards: stats.totalHeroCards
      }
    });
  }

  handleGenerateDeckClick() {
    this.props.generateDeck({
      baseDeckCards: this.state.baseDeckCards, 
      neutralDeckCards: this.state.neutralDeckCards, 
      leaderCards: this.state.leaderCards,
      totalUnitCards: this.state.totalUnitCards,
      totalSpecialCards: this.state.totalSpecialCards
    });
  }

  render(){
    return (
      <DeckSelectionPage 
        baseDeckFullName={this.state.baseDeckFullName}
        onDeckSelectionChange={this.handleBaseDeckSelection}
        baseDeck={this.state.baseDeck}
        leaderChoice={this.state.leaderChoice}
        neutralDeckCards={this.state.neutralDeckCards}
        onGenerateDeckClick={this.handleGenerateDeckClick}
        baseDeckCards={this.state.baseDeckCards}
        onDeckCardClick={this.handleDeckCardClick}
        totalCards={this.state.totalCards}
        totalUnitCards={this.state.totalUnitCards} 
        totalSpecialCards={this.state.totalSpecialCards} 
        totalCardStrength={this.state.totalCardStrength} 
        totalHeroCards={this.state.totalHeroCards}
      />
    );
  }
}


class DeckSelectionPage extends Component {
  render(){
    return(
      <div className="App">
        
        <div className="DeckSelectionOptions">
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

class DeckSelectionOptions extends Component {
  render(){
    return(
      <div className="DeckSelectionOptions">
        <h2>Select a Deck</h2>
        <div className="DeckChoiceImages">
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

class DeckChoices extends Component{
  render(){
    const arrayOfColumns = [];
    const numberOfColumns = this.props.numberOfColumns;

    for(let i = 0; i < numberOfColumns; i++){
      arrayOfColumns.push(
        <Column 
          cell={
            <CustomCell 
              data={this.props.deckCards} 
              path="/cards/" 
              numberOfColumns={numberOfColumns} 
              offset={i} 
              type="DeckCell" 
              onChange={this.props.onRowClick}
            />
          }
          width={this.props.cellWidth}
          key={i}
        />
      );
    }

    return(
      <div className="DeckTableDiv">
        <h2>{this.props.label}</h2>
        <Table 
          rowsCount={Math.ceil(this.props.deckCards.length/this.props.numberOfColumns)} 
          rowHeight={this.props.rowHeight} 
          maxHeight={this.props.maxHeight} 
          width={this.props.width} 
          headerHeight={0}
        >
         {arrayOfColumns}
        </Table>
      </div>
    )
  }
}

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

class LeaderChoice extends Component {
  render(){
    if(typeof this.props.leader === "undefined"){
      return null;
    }

    return(
      <div>
        <h3> Leader </h3>
        <img 
          src={this.props.path + this.props.leader.image} 
          className="LeaderImg"
        />
      </div>
    )
  }
}

class CustomCell extends Component {
  render(){
    const {rowIndex, data, field, offset, numberOfColumns, type, path, onChange} = this.props;

    if(typeof data[rowIndex * numberOfColumns + offset] === "undefined"){
      return null;
    }

    return(
      <Cell>
        <img 
          className={data[rowIndex * numberOfColumns + offset].checked === true ? "DeckImageCellImg ImageCellImgHighlight" : "DeckImageCellImg" } 
          src={path + data[rowIndex * numberOfColumns + offset].image}
          onClick={() => document.getElementById("Checkbox" + data[rowIndex * numberOfColumns + offset].id).click()}
        />
        <input
          id={"Checkbox" + data[rowIndex * numberOfColumns + offset].id} 
          className="Hidden"
          type="checkbox" 
          checked={data[rowIndex * numberOfColumns + offset].checked} 
          onChange={(event) => {
            this.props.onChange(data[rowIndex * numberOfColumns + offset].id, event.target.checked)
          }}
        />
      </Cell>
    );
  }
}

export default DeckSelectionPageContainer;
