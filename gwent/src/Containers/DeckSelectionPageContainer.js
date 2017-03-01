import React, { Component } from 'react'
import DeckSelectionPage from '../Components/DeckSelectionPage.js'
import  gwentCards from '../deckCards.js';


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
      totalHeroCards: 0,
      showLeaderSelection: false
    };

    this.handleBaseDeckSelection = this.handleBaseDeckSelection.bind(this);
    this.handleDeckCardClick = this.handleDeckCardClick.bind(this);
    this.handleLeaderClick = this.handleLeaderClick.bind(this);
    this.addCardToDeckArray = this.addCardToDeckArray.bind(this);
    this.handleGenerateDeckClick = this.handleGenerateDeckClick.bind(this);
    this.toggleLeaderSelection = this.toggleLeaderSelection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState !== this.state){
      return true;
    }
    return false;
  }

  handleDeckCardClick(id, checked){

    // Neutral Cards start at ID value of
    // 171
    let deckType; 
    let stateObject = {};

    if(id >= 171){
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

  toggleLeaderSelection(){
    this.setState({
      showLeaderSelection: !this.state.showLeaderSelection
    });
  }

  handleLeaderClick(id){
    const cards = this.state.leaderCards.slice();
    let leaderChoice = {};

    for(let i = 0; i < cards.length; i++){
      if(cards[i].id === id){
        cards[i].checked = true;
        leaderChoice = cards[i];
      }
      else{
        cards[i].checked = false;
      }
    }

    this.setState({
      leaderCards: cards,
      leaderChoice: leaderChoice,
      showLeaderSelection: false
    })
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
        leaderCards={this.state.leaderCards}
        showLeaderSelection={this.state.showLeaderSelection}
        toggleLeaderSelection={this.toggleLeaderSelection}
        onLeaderClick={this.handleLeaderClick}
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

export default DeckSelectionPageContainer;
