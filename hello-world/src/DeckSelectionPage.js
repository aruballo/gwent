import React, { Component } from 'react';
import '../node_modules/fixed-data-table/dist/fixed-data-table.css'
import './SelectionPage.css';
import './index.css';
import  gwentClasses from './classes.js';
import  gwentCards from './deckCards.js';
import Perf from 'react-addons-perf';
import {Table, Column, Cell} from 'fixed-data-table';

class DeckSelectionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseDeckSelected: "",
      baseDeckName: "",
      baseDeckCards: [],
      neutralDeckCards: [],
      leaderCards: [],
      totalCards: 0,
      totalUnitCards: 0,
      totalSpecialCards: 0,
      totalCardStrength: 0,
      totalHeroCards: 0
    };

    this.handleBaseDeckSelection = this.handleBaseDeckSelection.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
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

  handleRowClick(id, checked){

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
        baseDeckSelected: chosenDeck,
        baseDeckName: deckName,
        baseDeckCards: baseCards,
        leaderCards: leaderCards,
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
    //Perf.start();
    this.props.generateDeck({
      baseDeckCards: this.state.baseDeckCards, 
      neutralDeckCards: this.state.neutralDeckCards, 
      leaderCards: this.state.leaderCards,
      totalUnitCards: this.state.totalUnitCards,
      totalSpecialCards: this.state.totalSpecialCards
    });
  }

  componentDidUpdate(){
    //Perf.stop();
    //Perf.printInclusive();
    //Perf.printWasted();
  }

  render(){
    return (
      <div className="App">
        <div className="Header">
          <h1> Gwent Card Game </h1>
        </div>
        <div className="DeckSelectionOptions">
          <DeckSelectionOptions onChange={this.handleBaseDeckSelection} value={this.state.baseDeckSelected}/>
          <button onClick={this.handleGenerateDeckClick} className={this.state.baseDeckName === "" ? "Hidden":""}> Generate Deck! </button>
        </div>
        <div className={this.state.baseDeckName === "" ? "DeckChoicesAndStats Hidden":"DeckChoicesAndStats"}>
          <div>
            <BaseDeckLeaderChoices baseDeckName={this.state.baseDeckName} leaderCards={this.state.leaderCards} onRowClick={this.handleLeaderClick} rowHeight={285} maxHeight={325} width={700}/>
            <DeckChoices label="" deckCards={this.state.baseDeckCards} onRowClick={this.handleRowClick} rowHeight={300} maxHeight={500} width={700}/>
          </div>
          <DeckStats totalCards={this.state.totalCards} totalUnitCards={this.state.totalUnitCards} totalSpecialCards={this.state.totalSpecialCards} totalCardStrength={this.state.totalCardStrength} totalHeroCards={this.state.totalHeroCards}/>
          <DeckChoices label="Neutral Deck" deckCards={this.state.neutralDeckCards} onRowClick={this.handleRowClick} rowHeight={300} maxHeight={800} width={700} />
        </div>
      </div>
    );
  }
}

class DeckSelectionOptions extends Component {
  render(){
    return(
      <div className="DeckSelectionOptions">
        <div className="SelectionDropdown">
          <label>Base Deck</label><br/>
          <select id="SelectionDropdownEl" onChange={(event) => this.props.onChange(event.target.value)} value={this.props.value}>
            <option value=""></option>
            <option value="northern">Northern Realms</option>
            <option value="nilfgaard">Nilfgaardian Empire</option>
            <option value="monsters">Monsters</option>
            <option value="scoiatael">Scoia'Tael</option>
          </select>
        </div>
      </div>
    );
  }
}

class BaseDeckLeaderChoices extends Component {
  render(){
    return(
      <div className="LeaderTableDiv">
        <h2>{this.props.baseDeckName}</h2>
        <Table rowsCount={Math.ceil(this.props.leaderCards.length/3)} rowHeight={this.props.rowHeight} maxHeight={this.props.maxHeight} width={this.props.width} headerHeight={0}>
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} onChange={this.props.onRowClick} field="checked" groupLength={3} offset={0} type="Radio"/>
            }
            width={30}
          />
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} path="/cards/" field="image" groupLength={3} offset={0} type="Image"/>
            }
            width={175}
          />
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} onChange={this.props.onRowClick} field="checked" groupLength={3} offset={1} type="Radio"/>
            }
            width={30}
          />
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} path="/cards/" field="image" groupLength={3} offset={1} type="Image"/>
            }
            width={175}
          />
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} onChange={this.props.onRowClick} field="checked" groupLength={3} offset={2} type="Radio"/>
            }
            width={30}
          />
          <Column 
            cell={
              <CustomCell data={this.props.leaderCards} path="/cards/" field="image" groupLength={3} offset={2} type="Image"/>
            }
            width={175}
          />
        </Table>
      </div>
    )
  }
}

class DeckChoices extends Component{
  render(){
    return(
      <div className="DeckTableDiv">
        <h2>{this.props.label}</h2>
        <Table rowsCount={Math.ceil(this.props.deckCards.length/3)} rowHeight={this.props.rowHeight} maxHeight={this.props.maxHeight} width={this.props.width} headerHeight={0}>
          <Column 
            cell={
              <CustomCell data={this.props.deckCards} onChange={this.props.onRowClick} field="checked" groupLength={3} offset={0} type="Checkbox"/>
            }
            width={30}
          />
          <Column 
            cell={
              <CustomCell data={this.props.deckCards} path="/cards/" field="image" groupLength={3} offset={0} type="Image"/>
            }
            width={175}
          />
          <Column 
            cell={
              <CustomCell data={this.props.deckCards} onChange={this.props.onRowClick} groupLength={3} offset={1} type="Checkbox"/>
            }
            width={30}
          />
          <Column 
            cell={
              <CustomCell data={this.props.deckCards} path="/cards/" field="image" groupLength={3} offset={1} type="Image"/>
            }
            width={175}
          />
           <Column 
            cell={
              <CustomCell data={this.props.deckCards} onChange={this.props.onRowClick} field="checked" groupLength={3} offset={2} type="Checkbox"/>
            }
            width={30}
          />
          <Column  
            cell={
              <CustomCell data={this.props.deckCards} path="/cards/" field="image" groupLength={3} offset={2} type="Image"/>
            }
            width={175}
          />
          
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
          <h2> Deck Stats </h2>
          <h3> Total Cards in Deck </h3>
          <p>{this.props.totalCards}</p>
        </div>
        <div>
          <h3> Number of Unit Cards </h3>
          <p>{this.props.totalUnitCards}</p>
        </div>
        <div>
          <h3> Special Cards </h3>
          <p>{this.props.totalSpecialCards}</p>
        </div>
        <div>
          <h3> Total Unit Strength </h3>
          <p>{this.props.totalCardStrength}</p>
        </div>
        <div>
          <h3> Hero Cards </h3>
          <p>{this.props.totalHeroCards}</p>
        </div>
      </div>
    )
  }
}

class CustomCell extends Component {
  render(){
    const {rowIndex, data, field, offset, groupLength, type, path, onChange} = this.props;

    if(typeof data[rowIndex * groupLength + offset] === "undefined"){
      return null;
    }

    if(type === "Text"){
      return(
        <Cell>
          {data[rowIndex * groupLength + offset][field]}
        </Cell>
      );
    }
    else if(type === "Radio"){
      return(
        <Cell>
          <input type="radio" name="Leader" value={data[rowIndex * groupLength + offset].id} checked={data[rowIndex * groupLength + offset].checked} onChange={(event) => {
            this.props.onChange(data[rowIndex * groupLength + offset].id)}}/>
        </Cell>
      ); 
    }
    else if(type === "Image"){
      return(
        <Cell>
          <img className={data[rowIndex * groupLength + offset].checked === true ? "ImageCellImg ImageCellImgHighlight" : "ImageCellImg" } src={path + data[rowIndex * groupLength + offset][field]}/>
        </Cell>
      );
    }
    else if(type === "Checkbox"){
      return(
        <Cell>
          <input type="checkbox" checked={data[rowIndex * groupLength + offset].checked} onChange={(event) => {
            this.props.onChange(data[rowIndex * groupLength + offset].id, event.target.checked)}}/>
        </Cell>
      ); 
    }
  }
}

export default DeckSelectionPage;
