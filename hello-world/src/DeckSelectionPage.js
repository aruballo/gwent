import React, { Component } from 'react';
import './App.css';
import './index.css';
import  gwentClasses from './classes.js';
import  gwentCards from './deckCards.js';

class DeckSelectionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseDeckSelected: "",
      baseDeckName: "",
      baseDeckCards: [],
      neutralDeckCards: [],
      leaderCards: []
    };

    this.handleBaseDeckSelection = this.handleBaseDeckSelection.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleRowClick(id, checked){
    if(id >= 166){
      var deckType = "neutralDeckCards"
    }
    else{
      var deckType = "baseDeckCards";
    }
    
    let cardIndex = this.state[deckType].findIndex((el)=>{
      return el.id === id;
    });


    const cards = this.state[deckType].slice();
    cards[cardIndex].checked = checked;

    this.setState({
      '${deckType}': cards
    });
  }

  handleLeaderClick(){

  }

  handleBaseDeckSelection(chosenDeck){
    this.setState((prevState, props) => {

      let deckName = "";
      let leaderCards = [];
      let baseCards = [];
      let neutralCards = [];

      let addCardToDeckArray = function(card, deckArray){
          let newCard = card;
          newCard.checked = "true";
          newCard.key = newCard.id;
          deckArray.push(newCard);
      }

      if(chosenDeck === "northern"){
        deckName = "Northern Realms";
        gwentCards.northernLeaders.map((object)=> addCardToDeckArray(object, leaderCards));
        gwentCards.northernCards.map((object) => addCardToDeckArray(object, baseCards));
      }
      else if(chosenDeck === "nilfgaard"){
        deckName = "Nilfgaardian Empire";
        gwentCards.nilfgaardLeaders.map((object)=> addCardToDeckArray(object, leaderCards));
        gwentCards.nilfgaardCards.map((object) => addCardToDeckArray(object, baseCards));
      }
      else if(chosenDeck === "monsters"){
        deckName = "Monsters";
        gwentCards.monstersLeaders.map((object)=> addCardToDeckArray(object, leaderCards));
        gwentCards.monstersCards.map((object) => addCardToDeckArray(object, baseCards));
      }
      else if(chosenDeck === "scoiatael"){
        deckName = "Scoia'tael";
        gwentCards.scoiataelLeaders.map((object)=> addCardToDeckArray(object, leaderCards));
        gwentCards.scoiataelCards.map((object) => addCardToDeckArray(object, baseCards));
      }

      gwentCards.neutralCards.map((object) => addCardToDeckArray(object, neutralCards));

      return {
        baseDeckSelected: chosenDeck,
        baseDeckName: deckName,
        baseDeckCards: baseCards,
        leaderCards: leaderCards,
        neutralDeckCards: neutralCards
      }
    });
  }

  render(){
    return (
      <div className="App">
        <div className="Header">
          <h1> Gwent Card Game </h1>
        </div>
        <DeckSelectionOptions onChange={this.handleBaseDeckSelection} value={this.state.baseDeckSelected}/>
        <div className={this.state.baseDeckName === "" ? "DeckChoicesAndStats Hidden":"DeckChoicesAndStats"}>
          <div>
            <BaseDeckLeaderChoices baseDeckName={this.state.baseDeckName} leaderCards={this.state.leaderCards}/>
            <DeckChoices label="" deckCards={this.state.baseDeckCards} onRowClick={this.handleRowClick}/>
          </div>
          <DeckStats/>
          <DeckChoices label="Neutral Deck" deckCards={this.state.neutralDeckCards} onRowClick={this.handleRowClick}/>
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
    let leaderRows = [];

    this.props.leaderCards.map((object) => {
      leaderRows.push(<LeaderTableRow key={object.id} name={object.name} ability={object.ability}/>);
    });

    return(
      <div className="DeckTableDiv">
        <h2>{this.props.baseDeckName}</h2>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th> Leader Name </th>
              <th> Ability </th>
            </tr>
          </thead>
          <tbody>
            {leaderRows}
          </tbody>
        </table>
      </div>
    )
  }
}

class DeckChoices extends Component{
  render(){
    let tableRows = [];

    this.props.deckCards.map((object) =>{
      tableRows.push(<DeckTableRow key={object.id} id={object.id} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability} checked={object.checked} onChange={this.props.onRowClick}/>);
    });

    return(
      <div className="DeckTableDiv">
        <h2> {this.props.label} </h2>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th> Card Name </th>
              <th> Card Type </th>
              <th> Card Position </th>
              <th> Card Score </th>
              <th> Card Ability </th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}

class DeckStats extends Component {
  render(){
    return(
      <div className="DeckStats">
        <h2> Deck Stats </h2>
      </div>
    )
  }
}

class LeaderTableRow extends Component {
  render(){
    return(
      <tr>
        <td> <input type="radio" name="Leader" value={this.props.name}/></td>
        <td> {this.props.name} </td>
        <td> {this.props.ability} </td>
      </tr>
    )
  }
}

class DeckTableRow extends Component {
  render(){
    return(
      <tr>
        <td> <input type="checkbox" checked={this.props.checked} onChange={(event) => {
          this.props.onChange(this.props.id, event.target.checked);
        }}/></td>
        <td> {this.props.name} </td>
        <td> {this.props.type} </td>
        <td> {this.props.position} </td>
        <td> {this.props.score} </td>
        <td> {this.props.ability} </td>
      </tr>
    )
  }
}

export default DeckSelectionPage;
